import { auth } from '@/lib/firebase/config';
import type { PassScope } from '@/lib/catalog/types';

export class ApiError extends Error {
  constructor(public status: number, message: string, public code?: string) {
    super(message);
  }
}

export class CheckoutDismissedError extends Error {
  constructor() {
    super('Payment was cancelled.');
  }
}

async function postWithAuth<T>(url: string, body: unknown): Promise<T> {
  const currentUser = auth.currentUser;
  if (!currentUser) {
    throw new ApiError(401, 'Please sign in first.');
  }
  const token = await currentUser.getIdToken();
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(body),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new ApiError(response.status, data.error || 'Request failed. Please try again.', data.code);
  }
  return data as T;
}

interface RazorpaySuccessResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

interface RazorpayCheckout {
  open: () => void;
  on: (event: string, handler: (response: unknown) => void) => void;
}

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => RazorpayCheckout;
  }
}

let razorpayScript: Promise<void> | null = null;

function loadRazorpayScript(): Promise<void> {
  if (window.Razorpay) return Promise.resolve();
  if (!razorpayScript) {
    razorpayScript = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => {
        razorpayScript = null;
        reject(new Error('Could not load the payment window. Check your connection and try again.'));
      };
      document.body.appendChild(script);
    });
  }
  return razorpayScript;
}

// Opens Razorpay Checkout for a subject or semester pass and resolves once the
// server has verified the payment and granted the pass.
export async function buyPass(
  scope: PassScope,
  prefill: { name: string; email: string }
): Promise<{ expiresAt: number }> {
  const [order] = await Promise.all([
    postWithAuth<{ keyId: string; orderId: string; amount: number; currency: string; label: string }>(
      '/api/payments/create-order',
      { scope }
    ),
    loadRazorpayScript(),
  ]);

  const Razorpay = window.Razorpay;
  if (!Razorpay) {
    throw new Error('Could not load the payment window. Please refresh and try again.');
  }

  return new Promise((resolve, reject) => {
    const checkout = new Razorpay({
      key: order.keyId,
      order_id: order.orderId,
      amount: order.amount,
      currency: order.currency,
      name: 'Next Engineer',
      description: `${order.label} premium pass`,
      prefill,
      theme: { color: '#c2410c' },
      handler: (response: RazorpaySuccessResponse) => {
        postWithAuth<{ expiresAt: number }>('/api/payments/verify', response).then(resolve, reject);
      },
      modal: {
        ondismiss: () => reject(new CheckoutDismissedError()),
      },
    });
    // Failed attempts stay inside the Razorpay window so the student can retry
    checkout.on('payment.failed', (response) => console.warn('Razorpay payment failed:', response));
    checkout.open();
  });
}

// Where the reader gets a PDF's bytes from, in ranges
export interface PdfByteSource {
  getSize: () => Promise<number>;
  getRange: (start: number, end: number) => Promise<Uint8Array>;
}

// Uploaded files, free or premium, are only ever read through /api/resources/view, a range
// at a time, so the browser never holds a file URL it could open or share
export function resourceSource(resourceId: string): PdfByteSource {
  return {
    getSize: async () => (await postWithAuth<{ size: number }>('/api/resources/view', { resourceId })).size,
    getRange: async (start, end) => {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        throw new ApiError(401, 'Please sign in first.');
      }
      const response = await fetch('/api/resources/view', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${await currentUser.getIdToken()}` },
        body: JSON.stringify({ resourceId, start, end }),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new ApiError(response.status, data.error || 'Could not load this file.', data.code);
      }
      return new Uint8Array(await response.arrayBuffer());
    },
  };
}
