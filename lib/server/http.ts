import { DecodedIdToken } from 'firebase-admin/auth';
import { adminAuth } from '@/lib/firebase/admin';
import { isOwnerEmail } from '@/lib/owners';

export class HttpError extends Error {
  constructor(public status: number, message: string, public code?: string) {
    super(message);
  }
}

export function errorResponse(error: unknown): Response {
  if (error instanceof HttpError) {
    return Response.json({ error: error.message, code: error.code }, { status: error.status });
  }
  console.error(error);
  return Response.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
}

export async function requireUser(request: Request): Promise<DecodedIdToken> {
  const header = request.headers.get('authorization') || '';
  const token = header.startsWith('Bearer ') ? header.slice('Bearer '.length) : '';
  if (!token) {
    throw new HttpError(401, 'Please sign in first.');
  }
  try {
    return await adminAuth().verifyIdToken(token);
  } catch (error) {
    // Logged server-side so setup problems (bad credentials, wrong project) aren't hidden behind a 401
    const { code, message } = error as { code?: string; message?: string };
    console.warn(`ID token verification failed: ${code || ''} ${(message || '').split('\n')[0]}`);
    throw new HttpError(401, 'Your session has expired. Please sign in again.');
  }
}

export function isOwnerToken(user: DecodedIdToken): boolean {
  return isOwnerEmail(user.email, user.email_verified);
}

export async function readJson(request: Request): Promise<Record<string, unknown>> {
  try {
    const body = await request.json();
    if (body && typeof body === 'object') return body as Record<string, unknown>;
  } catch {
    // fall through
  }
  throw new HttpError(400, 'Invalid request body.');
}

export function requireString(body: Record<string, unknown>, key: string): string {
  const value = body[key];
  if (typeof value !== 'string' || !value || value.length > 200) {
    throw new HttpError(400, `Missing or invalid ${key}.`);
  }
  return value;
}
