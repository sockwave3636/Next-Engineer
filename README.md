# Next Engineer

Study material for AKTU students: notes, PYQs, important questions, syllabus, lab manuals,
videos and books, organised the way the university is (program → branch → semester → subject).
Built with Next.js, React, Tailwind CSS and Firebase.

## Features

- **Programs:** B.Tech, M.Tech, MBA, MCA, B.Pharm, BCA and BBA. Programs without branches skip
  the branch step.
- **Shared subjects:** a subject such as first-year Physics is added once and offered in many
  branches and semesters.
- **Subject pages:** unit-wise notes, PYQs grouped by year and odd or even semester, important
  questions, syllabus, lab, videos and books.
- **Server-rendered pages with clean addresses** (`/btech/cse/sem-3/bcs301-data-structure`), so
  search engines can index them. Each page has its own title, description and canonical link.
- **Subject search** by code or name, from the header or at `/search`.
- **Request a resource:** students ask for missing material from the subject page, and requests
  show up in the admin panel.
- **Premium:** subject passes and semester passes, paid through Razorpay. Premium PDFs
  need a pass, and so does every PDF of a subject whose subject or semester pass is on sale. Every PDF, free or premium, opens only in a watermarked, read-only reader; nothing
  can be downloaded.
- **Admin panel:** programs and branches, subjects and their material, blog and notices, and
  messages.
- Light and dark mode, and works on phones.

## Getting started

You need Node.js 20 or newer and a Firebase project with Authentication, Firestore and Storage
(Storage needs the Blaze plan).

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and fill in every value. No keys or IDs are hard-coded in the
   source.
   - `NEXT_PUBLIC_FIREBASE_*` comes from Firebase Console → Project settings → Your apps.
   - `FIREBASE_CLIENT_EMAIL` and `FIREBASE_PRIVATE_KEY` come from a service-account key. The
     server reads the catalog with them, including during the build.
   - `NEXT_PUBLIC_OWNER_EMAILS` lists the admin emails, comma-separated.
   - `NEXT_PUBLIC_SITE_URL` is the public address, used for canonical links.
   - Add the same variables in Vercel → Project → Settings → Environment Variables.
3. Owner emails also appear in `firestore.rules` and `storage.rules`, because Firebase rules can't
   read environment variables. Keep those lists in sync with `NEXT_PUBLIC_OWNER_EMAILS`.
4. Publish the rules (see below), then run:
   ```bash
   npm run dev
   ```
5. Load the AKTU programs, branches and subjects (about 900 subjects) into Firestore:
   ```bash
   npm run seed:catalog
   ```
   Then open http://localhost:3000 and sign in to `/admin` with an owner account to add material.

## Firebase rules

The security rules live in this repo:

- [`firestore.rules`](firestore.rules): programs, branches, subjects and resources are public to
  read and owner-only to write. Passes and payments are written only by the server.
- [`storage.rules`](storage.rules): `resources/` and `blog/` are public; `premium/` can't be read
  from the browser.

Paste each file into Firebase Console (Firestore → Rules, Storage → Rules), or run
`firebase deploy --only firestore:rules,storage`.

[PREMIUM_SETUP.md](PREMIUM_SETUP.md) covers authentication, the service account, Razorpay and
adding content.

## Data model

| Collection | Holds |
|---|---|
| `programs/{programId}` | name, level (UG/PG), years, semesters, whether it has branches |
| `programs/{programId}/branches/{branchId}` | branch name and its semester pass prices. Branchless programs keep theirs on a hidden `all` branch |
| `settings/site` | the admin's "Lock all material" switch (server-written) |
| `subjects/{subjectId}` | code, name, credits, type, unit titles, the branches and semesters it's taught in, subject pass, material counts |
| `resources/{id}` | one note, PYQ, link or book, with its unit, year and session, and whether it's premium |
| `users/{uid}/passes/{scope}` | a student's active passes (server-written) |
| `payments/{orderId}` | Razorpay orders (server-written) |
| `blogPosts`, `contactMessages` | notices, contact messages and resource requests |

## Project structure

```
app/
  [program]/[[...path]]/  program, branch, semester and subject pages (server-rendered)
  admin/                  admin panel; tabs live in admin/_components/
  api/                    payments, premium reader bytes, search index, cache refresh
  blog/[id]/              blog post page
  components/             shared UI; catalog/ holds the catalog page views
  context/                auth, pass, theme and sign-in prompt contexts
  search/                 search results page
lib/
  catalog/                types, routes, access rule, server reads, admin writes, defaults
    seed/                 AKTU programs, branches and subjects (loaded by npm run seed:catalog)
  firebase/               client and admin SDK setup, blog and message helpers
  server/                 payment, pass and premium-file helpers
scripts/
  seed-catalog.mjs        writes lib/catalog/seed into Firestore
```

## Tech stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Firebase (Auth, Firestore,
Storage, Admin SDK), Razorpay and PDF.js.
