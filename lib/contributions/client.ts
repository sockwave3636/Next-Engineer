import { auth } from '@/lib/firebase/config';
import { ApiError, PdfByteSource, postWithAuth, rangeSource } from '@/lib/premium-client';
import { rebuildPdfAsImages } from './rebuild-pdf';
import {
  ContributionForReview,
  ContributionType,
  MAX_UPLOAD_BYTES,
  MyContributions,
  UPLOAD_CHUNK_BYTES,
  startsLikePdf,
} from './rules';

async function bearer(): Promise<string> {
  if (!auth.currentUser) throw new ApiError(401, 'Please sign in first.');
  return `Bearer ${await auth.currentUser.getIdToken()}`;
}

async function getWithAuth<T>(url: string): Promise<T> {
  const response = await fetch(url, { headers: { Authorization: await bearer() } });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new ApiError(response.status, data.error || 'Request failed. Please try again.', data.code);
  return data as T;
}

// Files go up a few MB at a time: Vercel refuses larger requests. Returns how many parts it sent.
async function sendParts(url: string, id: string, bytes: Uint8Array, onProgress: (fraction: number) => void): Promise<number> {
  const parts = Math.ceil(bytes.length / UPLOAD_CHUNK_BYTES);
  for (let index = 0; index < parts; index++) {
    const response = await fetch(`${url}?id=${id}&index=${index}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/octet-stream', Authorization: await bearer() },
      body: bytes.slice(index * UPLOAD_CHUNK_BYTES, (index + 1) * UPLOAD_CHUNK_BYTES),
    });
    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      throw new ApiError(response.status, data.error || 'The upload failed. Please try again.', data.code);
    }
    onProgress((index + 1) / parts);
  }
  return parts;
}

// ---- Students -------------------------------------------------------------

export function getMyContributions(): Promise<MyContributions> {
  return getWithAuth<MyContributions>('/api/contributions');
}

export interface ShareDetails {
  subjectId: string;
  type: ContributionType;
  title: string;
  unit: number | null;
  year: string | null;
  session: 'odd' | 'even' | null;
}

export async function shareFile(details: ShareDetails, file: File, onProgress: (fraction: number) => void): Promise<void> {
  if (file.size > MAX_UPLOAD_BYTES) throw new Error('Files can be 20 MB at most.');
  const bytes = new Uint8Array(await file.arrayBuffer());
  if (!startsLikePdf(bytes)) throw new Error('Only real PDF files can be shared.');

  const { id } = await postWithAuth<{ id: string }>('/api/contributions', { action: 'start', ...details, sizeBytes: bytes.length, declared: true });
  try {
    await sendParts('/api/contributions/chunk', id, bytes, onProgress);
    await postWithAuth('/api/contributions', { action: 'finish', id });
  } catch (error) {
    postWithAuth('/api/contributions', { action: 'cancel', id }).catch(() => {
      // Abandoned uploads are cleared the next time this student shares a file
    });
    throw error;
  }
}

export function redeemCredits(subjectId: string): Promise<{ credits: number; expiresAt: number }> {
  return postWithAuth('/api/contributions/redeem', { subjectId });
}

// ---- Owners ---------------------------------------------------------------

const REVIEW_API = '/api/admin/contributions';

export function reviewSource(id: string): PdfByteSource {
  return rangeSource(`${REVIEW_API}/view`, { id });
}

export async function listForReview(status: string): Promise<ContributionForReview[]> {
  return (await getWithAuth<{ files: ContributionForReview[] }>(`${REVIEW_API}?status=${status}`)).files;
}

export interface ApprovalDetails {
  title: string;
  unit: number | null;
  year: string | null;
  session: 'odd' | 'even' | null;
  premium: boolean;
  credits: number;
}

// Draws each page in this browser, uploads the resulting picture-only PDF, then publishes it
export async function approveFile(id: string, details: ApprovalDetails, onStatus: (text: string) => void): Promise<{ creditsAwarded: number }> {
  const clean = await rebuildPdfAsImages(reviewSource(id), (done, total) => onStatus(`Making a clean copy: page ${done} of ${total}`));
  const parts = await sendParts(`${REVIEW_API}/chunk`, id, clean, (fraction) => onStatus(`Uploading the clean copy: ${Math.round(fraction * 100)}%`));
  onStatus('Publishing…');
  return postWithAuth(REVIEW_API, { action: 'approve', id, ...details, parts });
}

export function rejectFile(id: string, reason: string, deliberate: boolean): Promise<unknown> {
  return postWithAuth(REVIEW_API, { action: 'reject', id, reason, deliberate });
}

export function removeFile(id: string, reason: string, deliberate: boolean): Promise<unknown> {
  return postWithAuth(REVIEW_API, { action: 'remove', id, reason, deliberate });
}
