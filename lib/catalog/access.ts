import { ALL_BRANCHES, Subject } from './types';

// scopeKey → pass expiry (epoch millis)
export type PassExpiries = Record<string, number>;

// Shared by the server (file checks) and the client (lock icons).
// Access comes from a pass for this subject, or a semester pass for a branch and semester
// the subject is taught in. A subject shared by every branch in a semester (e.g. first year)
// is unlocked by any branch's semester pass for that semester.
export function hasSubjectAccess(
  passes: PassExpiries,
  subject: Pick<Subject, 'id' | 'programId' | 'offerings'>,
  now = Date.now()
): boolean {
  const active = (key: string) => (passes[key] ?? 0) > now;

  if (active(`subject:${subject.id}`)) return true;

  return subject.offerings.some((offering) => {
    if (offering.branchId !== ALL_BRANCHES) {
      return active(`semester:${subject.programId}:${offering.branchId}:${offering.semester}`);
    }
    return Object.keys(passes).some((key) => {
      const [type, programId, , semester] = key.split(':');
      return type === 'semester' && programId === subject.programId && semester === String(offering.semester) && active(key);
    });
  });
}
