import { FieldValue, Timestamp } from 'firebase-admin/firestore';
import { adminDb } from '@/lib/firebase/admin';
import type { PassExpiries } from '@/lib/catalog/access';
import type { PassScope } from '@/lib/catalog/types';
import { HttpError } from './http';

const DAY_MS = 24 * 60 * 60 * 1000;

// payments/{orderId} is created by /api/payments/create-order before checkout opens
export interface PaymentRecord {
  uid: string;
  email: string;
  scope: PassScope;
  scopeKey: string;
  // Shown to the student, e.g. "BCS301 Data Structure" or "B.Tech CSE"
  label: string;
  amountPaise: number;
  durationDays: number;
  status: 'created' | 'paid';
  razorpayPaymentId?: string;
}

// Called by both the browser verify route and the Razorpay webhook, so it must
// be idempotent: the transaction grants the pass only on the first call.
export async function grantPassForOrder(orderId: string, paymentId: string): Promise<{ expiresAt: number }> {
  const db = adminDb();
  const paymentRef = db.collection('payments').doc(orderId);

  return db.runTransaction(async (tx) => {
    const paymentSnap = await tx.get(paymentRef);
    if (!paymentSnap.exists) {
      throw new HttpError(404, 'Unknown order.');
    }
    const payment = paymentSnap.data() as PaymentRecord;
    const passRef = db.collection('users').doc(payment.uid).collection('passes').doc(payment.scopeKey);
    const passSnap = await tx.get(passRef);
    const currentExpiry = passSnap.exists ? (passSnap.get('expiresAt') as Timestamp).toMillis() : 0;

    if (payment.status === 'paid') {
      return { expiresAt: currentExpiry };
    }

    // Buying again while a pass is still active extends it instead of wasting the remaining days
    const expiresAt = Math.max(Date.now(), currentExpiry) + payment.durationDays * DAY_MS;
    tx.set(
      passRef,
      {
        scope: payment.scope,
        scopeKey: payment.scopeKey,
        label: payment.label,
        expiresAt: Timestamp.fromMillis(expiresAt),
        lastOrderId: orderId,
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    tx.update(paymentRef, {
      status: 'paid',
      razorpayPaymentId: paymentId,
      paidAt: FieldValue.serverTimestamp(),
    });
    return { expiresAt };
  });
}

// scopeKey → expiry, for lib/catalog/access.ts
export async function getPassExpiries(uid: string): Promise<PassExpiries> {
  const snapshot = await adminDb().collection('users').doc(uid).collection('passes').get();
  const expiries: PassExpiries = {};
  snapshot.forEach((doc) => {
    expiries[doc.id] = (doc.get('expiresAt') as Timestamp | undefined)?.toMillis() ?? 0;
  });
  return expiries;
}
