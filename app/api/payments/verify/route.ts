import { adminDb } from '@/lib/firebase/admin';
import { errorResponse, HttpError, readJson, requireString, requireUser } from '@/lib/server/http';
import { grantPassForOrder } from '@/lib/server/passes';
import { isValidPaymentSignature } from '@/lib/server/razorpay';

// POST { razorpay_order_id, razorpay_payment_id, razorpay_signature }
// Called by the browser right after Checkout succeeds. The webhook route
// grants the same pass if the browser never gets here (closed tab, lost network).
export async function POST(request: Request) {
  try {
    const user = await requireUser(request);
    const body = await readJson(request);
    const orderId = requireString(body, 'razorpay_order_id');
    const paymentId = requireString(body, 'razorpay_payment_id');
    const signature = requireString(body, 'razorpay_signature');

    if (!isValidPaymentSignature(orderId, paymentId, signature)) {
      throw new HttpError(400, 'Payment verification failed. If money was deducted, contact us with your payment ID.');
    }

    const paymentSnap = await adminDb().collection('payments').doc(orderId).get();
    if (!paymentSnap.exists || paymentSnap.get('uid') !== user.uid) {
      throw new HttpError(403, 'This order belongs to a different account.');
    }

    const { expiresAt } = await grantPassForOrder(orderId, paymentId);
    return Response.json({ expiresAt });
  } catch (error) {
    return errorResponse(error);
  }
}
