import { createHmac, timingSafeEqual } from 'node:crypto';

// Talks to the Razorpay REST API directly; the official SDK adds nothing we need.

function getKeys() {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) {
    throw new Error('Razorpay is not configured: set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET');
  }
  return { keyId, keySecret };
}

export function getRazorpayKeyId(): string {
  return getKeys().keyId;
}

export interface RazorpayOrder {
  id: string;
  amount: number;
  currency: string;
}

export async function createRazorpayOrder(params: {
  amountPaise: number;
  receipt: string;
  notes: Record<string, string>;
}): Promise<RazorpayOrder> {
  const { keyId, keySecret } = getKeys();
  const response = await fetch('https://api.razorpay.com/v1/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString('base64')}`,
    },
    body: JSON.stringify({
      amount: params.amountPaise,
      currency: 'INR',
      receipt: params.receipt,
      notes: params.notes,
    }),
  });
  if (!response.ok) {
    throw new Error(`Razorpay order creation failed (${response.status}): ${await response.text()}`);
  }
  return (await response.json()) as RazorpayOrder;
}

function signatureMatches(payload: string, signature: string, secret: string): boolean {
  const expected = createHmac('sha256', secret).update(payload).digest('hex');
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(signature);
  return expectedBuffer.length === actualBuffer.length && timingSafeEqual(expectedBuffer, actualBuffer);
}

// Signature Checkout returns to the browser after a successful payment
export function isValidPaymentSignature(orderId: string, paymentId: string, signature: string): boolean {
  return signatureMatches(`${orderId}|${paymentId}`, signature, getKeys().keySecret);
}

export function isValidWebhookSignature(rawBody: string, signature: string): boolean {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!secret) {
    throw new Error('RAZORPAY_WEBHOOK_SECRET is not set');
  }
  return signatureMatches(rawBody, signature, secret);
}
