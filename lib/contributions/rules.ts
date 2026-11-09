// Students share question papers and their own notes for credits. An owner checks every file by
// hand before it goes live or earns anything. The limits and penalties, used by server and client.

export const MAX_UPLOAD_BYTES = 20 * 1024 * 1024;
// Each upload request stays under Vercel's 4.5 MB request limit
export const UPLOAD_CHUNK_BYTES = 3 * 1024 * 1024;
export const MAX_WAITING_FILES = 3;
// An upload that never finished stops counting as waiting after this long
export const ABANDONED_UPLOAD_MS = 60 * 60 * 1000;

export const CREDITS_PER_FILE = 10;
export const MAX_CREDITS_PER_FILE = 50;
export const MONTHLY_CREDIT_CAP = 100;
export const REDEEM_COST = 50;
export const REDEEM_DAYS = 30;
export const BAN_DAYS = 30;

const DAY_MS = 24 * 60 * 60 * 1000;

export type ContributionType = 'pyq' | 'notes';
export type ContributionStatus = 'uploading' | 'pending' | 'approved' | 'rejected' | 'removed';

export const CONTRIBUTION_TYPES: { id: ContributionType; label: string }[] = [
  { id: 'pyq', label: 'AKTU question paper' },
  { id: 'notes', label: 'My own handwritten notes' },
];

export interface Contribution {
  id: string;
  subjectId: string;
  subjectCode: string;
  subjectName: string;
  type: ContributionType;
  title: string;
  unit: number | null;
  year: string | null;
  session: 'odd' | 'even' | null;
  sizeBytes: number;
  status: ContributionStatus;
  // Shown to the student when a file is rejected or removed
  reason: string;
  creditsAwarded: number;
  createdAt: number;
}

// What an owner sees for a file on top of what the student sees
export interface ContributionForReview extends Contribution {
  uploaderName: string;
  uploaderEmail: string;
  uploaderStrikes: number;
  // A question paper for this subject, year and session is already on the site
  duplicate: boolean;
}

export interface ContributorState {
  credits: number;
  strikes: number;
  blockedUntil: number | null;
  blockedForever: boolean;
  monthKey: string;
  earnedThisMonth: number;
}

export interface MyContributions extends ContributorState {
  emailVerified: boolean;
  // Why this student can't upload right now, or null
  uploadBlocked: string | null;
  waiting: number;
  files: Contribution[];
}

export function contributorState(d: Record<string, unknown> | undefined): ContributorState {
  return {
    credits: typeof d?.credits === 'number' ? d.credits : 0,
    strikes: typeof d?.strikes === 'number' ? d.strikes : 0,
    blockedUntil: typeof d?.blockedUntil === 'number' ? d.blockedUntil : null,
    blockedForever: d?.blockedForever === true,
    monthKey: typeof d?.monthKey === 'string' ? d.monthKey : '',
    earnedThisMonth: typeof d?.earnedThisMonth === 'number' ? d.earnedThisMonth : 0,
  };
}

export function monthKeyOf(now: number): string {
  return new Date(now).toISOString().slice(0, 7);
}

export function earnedThisMonth(state: ContributorState, now: number): number {
  return state.monthKey === monthKeyOf(now) ? state.earnedThisMonth : 0;
}

// How many of the credits an owner wants to give fit under the student's monthly cap
export function creditsWithinCap(state: ContributorState, requested: number, now: number): number {
  return Math.max(0, Math.min(requested, MONTHLY_CREDIT_CAP - earnedThisMonth(state, now)));
}

export function addCredits(state: ContributorState, amount: number, now: number): ContributorState {
  return {
    ...state,
    credits: state.credits + amount,
    monthKey: monthKeyOf(now),
    earnedThisMonth: earnedThisMonth(state, now) + amount,
  };
}

// Why this student can't upload right now, or null. Only uploading and earning are ever
// restricted: passes they paid for, and credits they already have, are left alone.
export function uploadBlockMessage(state: ContributorState, now: number): string | null {
  if (state.blockedForever) {
    return "You can no longer share files, because of repeated fake or copied uploads.";
  }
  if (state.blockedUntil && state.blockedUntil > now) {
    const until = new Date(state.blockedUntil).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    return `You can't share files until ${until}, because of a fake or copied upload.`;
  }
  return null;
}

// First deliberate fake or copied file: a warning. Second: no uploads for 30 days. Third: no more uploads.
export function withStrike(state: ContributorState, now: number): ContributorState {
  const strikes = state.strikes + 1;
  return {
    ...state,
    strikes,
    blockedUntil: strikes === 2 ? now + BAN_DAYS * DAY_MS : state.blockedUntil,
    blockedForever: state.blockedForever || strikes >= 3,
  };
}

export function chunkCount(sizeBytes: number): number {
  return Math.ceil(sizeBytes / UPLOAD_CHUNK_BYTES);
}

// The exact size chunk `index` must be, or null when there is no such chunk
export function chunkBytesAt(sizeBytes: number, index: number): number | null {
  const count = chunkCount(sizeBytes);
  if (!Number.isInteger(index) || index < 0 || index >= count) return null;
  return index < count - 1 ? UPLOAD_CHUNK_BYTES : sizeBytes - UPLOAD_CHUNK_BYTES * (count - 1);
}

// Checks the file's real first bytes, so a program renamed to .pdf is refused
export function startsLikePdf(bytes: Uint8Array): boolean {
  return [0x25, 0x50, 0x44, 0x46, 0x2d].every((byte, index) => bytes[index] === byte); // "%PDF-"
}

export function isAcademicYear(text: string): boolean {
  return /^\d{4}-\d{2}$/.test(text);
}

export function defaultTitle(type: ContributionType, code: string, details: { year: string | null; session: 'odd' | 'even' | null; unit: number | null }): string {
  if (type === 'pyq') {
    return `${code} question paper ${details.year ?? ''} (${details.session === 'even' ? 'even' : 'odd'} semester)`;
  }
  return details.unit ? `Handwritten notes: Unit ${details.unit}` : 'Handwritten notes';
}
