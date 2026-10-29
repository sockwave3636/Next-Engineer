import { FieldValue } from 'firebase-admin/firestore';
import { adminDb } from '@/lib/firebase/admin';
import { DEFAULT_BRANCH_ID, PassScope, PassSettings, passOnSale, scopeKey } from '@/lib/catalog/types';
import { errorResponse, HttpError, isOwnerToken, readJson, requireString, requireUser } from '@/lib/server/http';
import type { PaymentRecord } from '@/lib/server/passes';
import { createRazorpayOrder, getRazorpayKeyId } from '@/lib/server/razorpay';

// Looks up the price and a display label for a scope.
// The price always comes from Firestore, never from the browser.
async function resolvePass(scope: PassScope): Promise<{ pass: PassSettings | undefined; label: string }> {
  const db = adminDb();
  if (scope.type === 'subject') {
    const subject = (await db.collection('subjects').doc(scope.subjectId).get()).data();
    if (!subject) throw new HttpError(404, 'Subject not found.');
    return { pass: subject.pass, label: `${subject.code} ${subject.name}` };
  }
  const programRef = db.collection('programs').doc(scope.programId);
  const [program, branch] = await Promise.all([
    programRef.get().then((s) => s.data()),
    programRef.collection('branches').doc(scope.branchId).get().then((s) => s.data()),
  ]);
  if (!program || !branch) throw new HttpError(404, 'Branch not found.');
  if (scope.semester > (program.semesters ?? 0)) throw new HttpError(404, 'Semester not found.');
  const name = scope.branchId === DEFAULT_BRANCH_ID ? program.name : `${program.name} ${branch.shortName ?? branch.name}`;
  return { pass: branch.semesterPasses?.[String(scope.semester)], label: `${name} · Semester ${scope.semester}` };
}

function readScope(body: Record<string, unknown>): PassScope {
  const scope = (body.scope ?? {}) as Record<string, unknown>;
  if (scope.type === 'subject') {
    return { type: 'subject', subjectId: requireString(scope, 'subjectId') };
  }
  if (scope.type === 'semester') {
    const semester = Number(scope.semester);
    if (!Number.isInteger(semester) || semester < 1 || semester > 12) throw new HttpError(400, 'Missing or invalid semester.');
    return {
      type: 'semester',
      programId: requireString(scope, 'programId'),
      branchId: requireString(scope, 'branchId'),
      semester,
    };
  }
  throw new HttpError(400, 'Choose what to unlock.');
}

// POST { scope: { type: 'subject', subjectId } | { type: 'semester', programId, branchId, semester } }
//   -> order details for Razorpay Checkout
export async function POST(request: Request) {
  try {
    const user = await requireUser(request);
    const scope = readScope(await readJson(request));

    if (isOwnerToken(user)) {
      throw new HttpError(400, 'Owner accounts already have full access.');
    }

    const { pass, label } = await resolvePass(scope);
    if (!passOnSale(pass)) {
      throw new HttpError(400, 'This pass is not on sale right now.');
    }

    const key = scopeKey(scope);
    const amountPaise = Math.round(pass.price * 100);
    const order = await createRazorpayOrder({
      amountPaise,
      // Razorpay caps receipts at 40 characters
      receipt: `${key.replace(/[^a-z0-9]/gi, '').slice(0, 24)}-${Date.now()}`,
      notes: { uid: user.uid, scopeKey: key },
    });

    const payment: PaymentRecord = {
      uid: user.uid,
      email: user.email || '',
      scope,
      scopeKey: key,
      label,
      amountPaise,
      durationDays: pass.durationDays,
      status: 'created',
    };
    await adminDb()
      .collection('payments')
      .doc(order.id)
      .set({ ...payment, createdAt: FieldValue.serverTimestamp() });

    return Response.json({
      keyId: getRazorpayKeyId(),
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      label,
    });
  } catch (error) {
    return errorResponse(error);
  }
}
