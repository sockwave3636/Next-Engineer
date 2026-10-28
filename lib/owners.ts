// Owner accounts get the admin panel and full premium access.
// Set NEXT_PUBLIC_OWNER_EMAILS (comma-separated) in .env and in Vercel, and keep it
// in sync with isOwner() in firestore.rules and storage.rules.
export const OWNER_EMAILS = (process.env.NEXT_PUBLIC_OWNER_EMAILS || '')
  .split(',')
  .map((email) => email.trim().toLowerCase())
  .filter(Boolean);

export function isListedOwnerEmail(email: string | null | undefined): boolean {
  return !!email && OWNER_EMAILS.includes(email.toLowerCase());
}

// The email must be verified: otherwise anyone could register an unclaimed
// owner address with email/password sign-up and gain admin access.
export function isOwnerEmail(email: string | null | undefined, emailVerified: boolean | undefined): boolean {
  return !!emailVerified && isListedOwnerEmail(email);
}
