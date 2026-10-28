import { ALL_BRANCHES, Branch, DEFAULT_BRANCH_ID, Program, Subject } from './types';

// URL scheme:
//   /btech                          program (branch list)
//   /btech/cse                      branch (semester list)
//   /btech/cse/sem-3                semester (subject list)
//   /btech/cse/sem-3/bcs301-data…   subject
// Programs without branches drop the branch segment: /mba, /mba/sem-1, /mba/sem-1/<subject>

export function semesterSlug(semester: number): string {
  return `sem-${semester}`;
}

export function parseSemester(segment: string): number | null {
  const match = /^sem-(\d{1,2})$/.exec(segment);
  return match ? Number(match[1]) : null;
}

export function programPath(program: Pick<Program, 'id'>): string {
  return `/${program.id}`;
}

export function branchPath(program: Pick<Program, 'id' | 'hasBranches'>, branchId: string): string {
  return program.hasBranches ? `/${program.id}/${branchId}` : `/${program.id}`;
}

export function semesterPath(program: Pick<Program, 'id' | 'hasBranches'>, branchId: string, semester: number): string {
  return `${branchPath(program, branchId)}/${semesterSlug(semester)}`;
}

export function subjectPath(
  program: Pick<Program, 'id' | 'hasBranches'>,
  branchId: string,
  semester: number,
  subject: Pick<Subject, 'slug'>
): string {
  return `${semesterPath(program, branchId, semester)}/${subject.slug}`;
}

// One URL per subject for search engines: its first offering, with a shared
// ("all branches") offering shown under the program's first branch
export function canonicalSubjectPath(
  program: Pick<Program, 'id' | 'hasBranches'>,
  branches: Pick<Branch, 'id'>[],
  subject: Pick<Subject, 'slug' | 'offerings'>
): string | null {
  const offering = subject.offerings[0];
  if (!offering) return null;
  const branchId = !program.hasBranches
    ? DEFAULT_BRANCH_ID
    : offering.branchId === ALL_BRANCHES
      ? branches[0]?.id
      : offering.branchId;
  return branchId ? subjectPath(program, branchId, offering.semester, subject) : null;
}

export type ResolvedRoute =
  | { kind: 'program' }
  | { kind: 'branch'; branchId: string }
  | { kind: 'semester'; branchId: string; semester: number }
  | { kind: 'subject'; branchId: string; semester: number; subjectSlug: string }
  | { kind: 'notFound' };

export function resolvePath(program: Pick<Program, 'hasBranches' | 'semesters'>, segments: string[]): ResolvedRoute {
  const parts = program.hasBranches ? segments : [DEFAULT_BRANCH_ID, ...segments];
  if (parts.length === 0) return { kind: 'program' };

  const [branchId, semesterSegment, subjectSegment, ...rest] = parts;
  if (rest.length > 0) return { kind: 'notFound' };
  if (!semesterSegment) {
    // For branchless programs the program page is the (hidden) branch page
    return program.hasBranches ? { kind: 'branch', branchId } : { kind: 'program' };
  }

  const semester = parseSemester(semesterSegment);
  if (!semester || semester > program.semesters) return { kind: 'notFound' };
  if (!subjectSegment) return { kind: 'semester', branchId, semester };
  return { kind: 'subject', branchId, semester, subjectSlug: subjectSegment };
}

export function semesterLabel(semester: number): string {
  return `Semester ${semester}`;
}

export function yearOfSemester(semester: number): number {
  return Math.ceil(semester / 2);
}
