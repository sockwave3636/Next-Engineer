# Setup: content, premium passes and payments

## How the site is organised

Students go **program → branch → semester → subject**. Programs without branches (MBA, MCA,
B.Pharm, BCA, BBA) skip the branch step. Every page is rendered on the server with a clean
address, so Google can index it:

| Page | Example address |
|---|---|
| Program | `/btech` |
| Branch | `/btech/cse` |
| Semester | `/btech/cse/sem-3` |
| Subject | `/btech/cse/sem-3/bcs301-data-structure` |
| Branchless program | `/mba`, `/mba/sem-1`, `/mba/sem-1/kmb101-management-concepts` |

Each subject page has tabs for **Notes, PYQs, Important questions, Syllabus, Lab, Videos &
links and Books**:
- Notes, important questions and videos can be filtered by unit.
- PYQs are grouped by academic year and odd or even semester.

A subject shared by several branches (for example first-year Physics) is added once and marked
**All branches**.

Students can search any subject by code or name from the header, and use **Request a resource**
on a subject page. Requests land in Admin → Messages.

## Premium passes

There are two kinds of pass, each with its own price and duration:
- **Subject pass:** unlocks one subject's premium material. You set the price on the subject.
- **Semester pass:** unlocks every subject in one semester of a branch (e.g. B.Tech CSE
  Semester 3), including subjects shared with "All branches". You set a price per semester under
  Programs → a branch's **Semester passes** (for MBA, MCA and other branchless programs:
  **Set prices**). "Apply to every semester" fills one price in for all of them.

Semester passes show on the semester page and as a price badge on each semester card. A subject
page offers both its own pass and its semester's pass.

How a purchase works:
1. A student clicks **Unlock** and signs in with Google or email.
2. `/api/payments/create-order` reads the price **from Firestore** and creates a Razorpay order.
3. Razorpay Checkout takes the payment (UPI, cards, netbanking, wallets).
4. `/api/payments/verify` checks Razorpay's signature and writes `users/{uid}/passes/{scope}`.
   `/api/payments/webhook` does the same if the student closes the tab first.

Buying again while a pass is active extends it. Owner accounts always have full access.

## Premium files are read-only

Every uploaded file, free or premium, is a PDF that students **read** on the site; nothing can be
downloaded. Reading needs sign-in, so every page carries the reader's email. Premium files also
need a pass. Links (videos, articles) still open in a new tab.

- **Rendering:** the reader draws each page with PDF.js, so the browser never gets a file link.
- **Delivery:** pages arrive in 512 KB pieces from `/api/resources/view`, and every request
  re-checks the student's pass. Small pieces fit Vercel's response limit, so large books work too.
- **Watermark:** every page carries the student's email, so a leaked screenshot can be traced.
- **Screenshots:** pages go blank when the window loses focus (snipping tools take focus), on
  PrintScreen (which also overwrites the clipboard), and while the Windows/Cmd key is held.
  Phone screenshots and cameras can't be blocked by any website; the watermark makes them traceable.
- **Deterrents:** no download or print button, right-click and Ctrl+S/Ctrl+P blocked, and printing
  shows a blank page.
- **PDF only:** premium uploads must be PDFs, and the admin panel enforces this.

No website can fully stop copying: someone can still take screenshots. These measures make
copying slow and traceable.

## Adding content (Admin panel)

The AKTU subject lists are already in the repo, in `lib/catalog/seed/`. They cover every subject,
lab, project and elective for B.Tech (11 branches), MBA, MCA, B.Pharm, BCA and BBA, taken from
AKTU's official evaluation schemes in force for 2026-27. Each file lists its source PDFs. Load
them into Firestore once:

```bash
npm run seed:catalog -- --dry-run
npm run seed:catalog
```

Running it again is safe: programs and branches you edited stay as they are, and existing
subjects keep their passes, material and unit titles. When AKTU publishes a new scheme, edit the
JSON file and run it again. M.Tech has its program and branches but no subjects, because AKTU
doesn't publish a current M.Tech scheme; add those subjects in the admin panel.

1. **Programs:**
   - Click **Add default programs** once. This adds B.Tech, MBA, MCA, B.Pharm, M.Tech, BCA and
     BBA, with common AKTU branches for B.Tech and M.Tech.
   - Edit names, durations and branches as needed.
   - Set semester pass prices here.
2. **Subjects and material:**
   - Pick a program, then **+ Add subject**.
   - Enter the code, name, credits, type, unit titles, and **Taught in** (which branches and
     semesters). Optionally add a subject pass.
   - Then click **📂 Material** to add notes, PYQs, important questions, syllabus, lab manuals,
     books or links.
   - Tick **⭐ Premium** on PDFs that need a pass.
   - Deleting material or a subject deletes its files too.
3. **Blog and notices**, and **Messages:** posts appear on the home page under Latest updates.
   Resource requests are tagged **🙋 Request** and link to the subject page.

Public pages are cached for speed, and every admin save refreshes them immediately.

Storage layout:
- `resources/{subjectId}/…` for free files (public)
- `premium/{subjectId}/…` for premium PDFs (no browser access)
- `blog/…` for post media

## 1. Local tools

Install Node.js 20 or newer from https://nodejs.org, then:

```bash
npm install
```

## 2. Firebase

1. **Authentication → Sign-in method:** enable **Google** and **Email/Password**.
2. **Authentication → Settings → Authorized domains:** add your Vercel domain(s).
3. **Project settings → Service accounts → Generate new private key.** Copy `client_email` and
   `private_key` into the env vars (step 4). Keep the file secret and never commit it.
4. **Publish the security rules** in this repo:
   - Firestore → Rules: paste `firestore.rules`, then Publish
   - Storage → Rules: paste `storage.rules`, then Publish
   - or with the Firebase CLI: `firebase deploy --only firestore:rules,storage`
5. Storage requires the **Blaze** (pay-as-you-go) plan.

> **Owner accounts must have a verified email.** Sign in to the admin panel with
> **Continue with Google**; Google accounts are always verified.

## 3. Razorpay

1. Create an account at https://dashboard.razorpay.com and complete KYC.
   Razorpay checks your website before going live. It needs **Contact Us, Terms, Privacy
   Policy and a Refund/Cancellation Policy** page, plus visible pricing. All four exist
   (`/contact`, `/terms`, `/privacy-policy`, `/refund-policy`) and are linked in the footer;
   review the refund terms in `app/refund-policy/page.tsx` before you apply.
2. In **Test mode**, generate keys under **Account & Settings → API Keys**.
3. Under **Webhooks → Add new webhook**:
   - URL: `https://YOUR-DOMAIN/api/payments/webhook`
   - Secret: any long random string (it becomes `RAZORPAY_WEBHOOK_SECRET`)
   - Events: `payment.captured` and `order.paid`
4. Keep **Payment capture** on **Automatic**.

## 4. Environment variables

Copy `.env.example` to `.env` and fill in every value. Add **all** of them in
**Vercel → Project → Settings → Environment Variables**, then redeploy.

The server needs the Firebase service-account values even while building, because the home and
catalog pages read Firestore when they're generated. Set `NEXT_PUBLIC_SITE_URL` to your real
address so canonical links are correct.

## 5. Test before going live

With test keys, buy passes from a **student** account, not an owner account. In Razorpay's test
checkout, use UPI `success@razorpay`. Check:

- a **subject pass** opens that subject's premium PDFs, while other subjects stay locked
- a **semester pass** opens every premium PDF in that semester, including "All branches"
  subjects, while other semesters stay locked
- the payment appears in Firestore under `payments/` with `status: "paid"`
- signed out, or as another student, premium files show **🔒 Unlock**

## 6. Going live

Switch Razorpay to **Live mode**, generate live keys, and create the webhook again in live mode
(it has its own secret). Update the three `RAZORPAY_*` variables in Vercel and redeploy.
