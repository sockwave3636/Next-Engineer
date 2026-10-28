import { HttpError } from '@/lib/server/http';
import { grantPassForOrder } from '@/lib/server/passes';
import { isValidWebhookSignature } from '@/lib/server/razorpay';

interface RazorpayWebhookEvent {
  event: string;
  payload?: {
    payment?: { entity?: { id?: string; order_id?: string } };
    order?: { entity?: { id?: string } };
  };
}

// Configure in Razorpay Dashboard -> Webhooks with events payment.captured and order.paid.
export async function POST(request: Request) {
  // The signature covers the exact raw body, so read it before parsing
  const rawBody = await request.text();
  const signature = request.headers.get('x-razorpay-signature') || '';

  try {
    if (!signature || !isValidWebhookSignature(rawBody, signature)) {
      return Response.json({ error: 'Invalid signature' }, { status: 400 });
    }
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Webhook not configured' }, { status: 500 });
  }

  const event = JSON.parse(rawBody) as RazorpayWebhookEvent;
  if (event.event !== 'payment.captured' && event.event !== 'order.paid') {
    return Response.json({ ignored: event.event });
  }

  const paymentId = event.payload?.payment?.entity?.id;
  const orderId = event.payload?.order?.entity?.id || event.payload?.payment?.entity?.order_id;
  if (!orderId || !paymentId) {
    return Response.json({ ignored: 'no order' });
  }

  try {
    await grantPassForOrder(orderId, paymentId);
    return Response.json({ ok: true });
  } catch (error) {
    // Payments not created by this site (e.g. payment links) have no order record
    if (error instanceof HttpError && error.status === 404) {
      return Response.json({ ignored: 'unknown order' });
    }
    console.error('Webhook failed to grant pass:', error);
    // Non-2xx makes Razorpay retry
    return Response.json({ error: 'Failed to grant pass' }, { status: 500 });
  }
}
