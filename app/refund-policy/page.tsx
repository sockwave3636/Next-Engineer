import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '../components/PageShell';
import PageIntro from '../components/PageIntro';

export const metadata: Metadata = {
  title: 'Refund and Cancellation Policy',
  description: 'How refunds and cancellations work for Next Engineer subject and semester passes.',
  alternates: { canonical: '/refund-policy' },
};

// Shown to Razorpay during account review and linked from every pass purchase
export default function RefundPolicyPage() {
  return (
    <PageShell>
      <div className="container-page max-w-3xl py-12">
        <PageIntro eyebrow="Legal" title="Refund and Cancellation Policy" description="Last updated: 28 October 2026" />

        <section className="card card-pad prose-page">
          <p>
            This policy covers the premium passes sold on Next Engineer. Free notes and papers cost nothing and need no
            refund.
          </p>

          <h2>What a pass is</h2>
          <ul>
            <li>
              <strong>Subject pass:</strong> online, read-only access to the premium material of one subject.
            </li>
            <li>
              <strong>Semester pass:</strong> online, read-only access to the premium material of every subject in one
              semester of a program or branch.
            </li>
          </ul>
          <p>
            Each pass is a one-time payment for a fixed number of days, shown before you pay. It is not a subscription and
            never renews or charges you again on its own. Payments are processed securely by Razorpay.
          </p>

          <h2>Delivery</h2>
          <p>
            Passes are digital. Access starts as soon as your payment succeeds, on the account you were signed in with, and
            you read the material on this website. Nothing is shipped.
          </p>

          <h2>Cancellation</h2>
          <p>
            Because a pass doesn&apos;t renew, there is nothing to cancel: it simply ends on its expiry date. A pass can&apos;t be
            cancelled after it has been activated, since access is delivered immediately.
          </p>

          <h2>Refunds</h2>
          <p>
            As access is delivered instantly, passes are not refundable once activated, except in these cases, where we
            refund the full amount:
          </p>
          <ul>
            <li>You were charged, but the pass was not activated on your account and we couldn&apos;t fix it.</li>
            <li>You were charged more than once for the same pass.</li>
            <li>
              A fault on our side, or the premium material being unavailable, stopped you from reading what the pass covers,
              and we couldn&apos;t fix it within 7 days of you telling us.
            </li>
          </ul>

          <h2>How to ask for a refund</h2>
          <p>
            Write to us through the <Link href="/contact">Contact page</Link> within 7 days of your payment. Please include
            the email address you signed in with, the Razorpay payment ID from your payment receipt, and what went wrong. We
            reply within 3 working days.
          </p>
          <p>
            Approved refunds go back to your original payment method (UPI, card, netbanking or wallet). Razorpay and your bank
            usually take 5 to 7 working days to credit it.
          </p>

          <h2>Failed payments</h2>
          <p>
            If money left your account but the payment failed, your bank or Razorpay normally reverses it automatically
            within 5 to 7 working days. If it doesn&apos;t, contact us with the payment details and we&apos;ll help.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy. The version shown on this page when you bought your pass applies to that purchase.
            See also our <Link href="/terms">Terms of Service</Link> and <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
