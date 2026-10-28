// Formatting helpers safe to use on the server and in the browser

// Accepts a Firestore Timestamp (client or admin SDK), epoch millis, or a date string
export function formatPostDate(createdAt: unknown): string {
  const millis =
    createdAt && typeof (createdAt as { toMillis?: () => number }).toMillis === 'function'
      ? (createdAt as { toMillis: () => number }).toMillis()
      : typeof createdAt === 'number'
        ? createdAt
        : Date.parse(String(createdAt));
  if (!millis || Number.isNaN(millis)) return '';
  return new Date(millis).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}
