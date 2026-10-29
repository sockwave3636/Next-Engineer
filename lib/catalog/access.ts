import { ALL_BRANCHES, Branch, Resource, Subject, semesterPassOf } from './types';

// scopeKey → pass expiry (epoch millis)
export type PassExpiries = Record<string, number>;

// A subject is paid once a pass that unlocks it is on sale: its own subject pass, or a semester
// pass for a branch and semester it's taught in (any branch's, for a subject shared by every
// branch). `branches` are the subject's program's branches.
export function subjectOnSale(
  subject: Pick<Subject, 'pass' | 'offerings'>,
  branches: Pick<Branch, 'id' | 'semesterPasses'>[]
): boolean {
  if (subject.pass?.enabled) return true;
  return subject.offerings.some((offering) =>
    branches.some(
      (branch) =>
        (offering.branchId === ALL_BRANCHES || offering.branchId === branch.id) &&
        semesterPassOf(branch, offering.semester)?.enabled === true
    )
  );
}

// Every file of a paid subject needs a pass, whatever its own premium flag says.
// Links (videos, external pages) stay open: they aren't hosted here.
export function needsPass(resource: Pick<Resource, 'premium' | 'url'>, subjectIsOnSale: boolean): boolean {
  return resource.premium || (subjectIsOnSale && !resource.url);
}

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
