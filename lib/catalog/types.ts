// Content model: Program → Branch → Semester → Subject → Resources.
// Everything here is plain serialisable data (timestamps as epoch millis),
// so server components can hand it straight to client components.

export type ProgramLevel = 'UG' | 'PG';

export interface PassSettings {
  enabled: boolean;
  // Whole rupees
  price: number;
  durationDays: number;
}

export interface Program {
  id: string; // URL slug: btech, mba…
  name: string; // B.Tech
  fullName: string; // Bachelor of Technology
  level: ProgramLevel;
  durationYears: number;
  semesters: number;
  // false for MBA, MCA…: they have a single hidden branch (DEFAULT_BRANCH_ID)
  hasBranches: boolean;
  order: number;
  active: boolean;
  description?: string;
}

export interface Branch {
  id: string; // URL slug: cse, it…
  programId: string;
  name: string; // Computer Science & Engineering
  shortName: string; // CSE
  order: number;
  active: boolean;
  // Semester passes, keyed by semester number ("1"…"8"): each unlocks every premium
  // resource of the subjects taught in that semester of this branch
  semesterPasses?: Record<string, PassSettings>;
}

export function semesterPassOf(branch: Pick<Branch, 'semesterPasses'>, semester: number): PassSettings | undefined {
  return branch.semesterPasses?.[String(semester)];
}

// Hidden branch used by programs without branches; it holds the program's semester passes
export const DEFAULT_BRANCH_ID = 'all';
// Offering branch meaning "every branch of the program" (e.g. B.Tech first year)
export const ALL_BRANCHES = '*';

export interface Offering {
  branchId: string; // a branch id or ALL_BRANCHES
  semester: number;
}

export type SubjectKind = 'theory' | 'practical' | 'project' | 'elective';

export const SUBJECT_KINDS: { id: SubjectKind; label: string }[] = [
  { id: 'theory', label: 'Theory' },
  { id: 'practical', label: 'Practical / Lab' },
  { id: 'project', label: 'Project / Seminar' },
  { id: 'elective', label: 'Elective' },
];

export type ResourceType = 'notes' | 'pyq' | 'important' | 'syllabus' | 'lab' | 'book' | 'video';

export const RESOURCE_TYPES: { id: ResourceType; label: string; icon: string; usesUnit: boolean }[] = [
  { id: 'notes', label: 'Notes', icon: '📝', usesUnit: true },
  { id: 'pyq', label: 'PYQs', icon: '📄', usesUnit: false },
  { id: 'important', label: 'Important questions', icon: '⭐', usesUnit: true },
  { id: 'syllabus', label: 'Syllabus', icon: '📋', usesUnit: false },
  { id: 'lab', label: 'Lab', icon: '🧪', usesUnit: false },
  { id: 'video', label: 'Videos & links', icon: '🎥', usesUnit: true },
  { id: 'book', label: 'Books', icon: '📚', usesUnit: false },
];

export interface Subject {
  id: string; // lower-case code: bcs301
  code: string; // BCS301
  name: string;
  slug: string; // bcs301-data-structure, unique within a program
  credits: number;
  kind: SubjectKind;
  // Optional grouping label, e.g. "Departmental Elective I" or "Finance specialization"
  group?: string;
  // Usually five for theory subjects; empty for labs
  unitTitles: string[];
  description?: string;
  programId: string;
  offerings: Offering[];
  // `${programId}|${branchId}|${semester}` per offering, for array-contains-any queries
  offeringKeys: string[];
  // Subject pass: unlocks this subject's premium resources only
  pass?: PassSettings;
  // Per resource type, plus 'premium' for how many of them are premium
  resourceCounts: Partial<Record<ResourceType | 'premium', number>>;
}

export interface Resource {
  id: string;
  subjectId: string;
  type: ResourceType;
  title: string;
  unit: number | null;
  // PYQs: academic year (e.g. "2023-24") and odd/even semester session
  year: string | null;
  session: 'odd' | 'even' | null;
  // Uploaded PDFs open only in the read-only reader: storagePath is private and fileUrl is
  // always null (kept for older records, never shown)
  premium: boolean;
  fileUrl: string | null;
  storagePath: string | null;
  // External link (videos, playlists, articles)
  url: string | null;
  fileName: string | null;
  sizeBytes: number | null;
  createdAt: number;
}

export type PassScope =
  | { type: 'subject'; subjectId: string }
  | { type: 'semester'; programId: string; branchId: string; semester: number };

export function scopeKey(scope: PassScope): string {
  return scope.type === 'subject'
    ? `subject:${scope.subjectId}`
    : `semester:${scope.programId}:${scope.branchId}:${scope.semester}`;
}

export function offeringKey(programId: string, branchId: string, semester: number): string {
  return `${programId}|${branchId}|${semester}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

export function subjectIdFromCode(code: string): string {
  return code.toLowerCase().replace(/[^a-z0-9]/g, '');
}

export function subjectSlug(code: string, name: string): string {
  return slugify(`${code} ${name}`);
}

export function formatRupees(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}

export function formatBytes(bytes: number | null): string {
  if (!bytes) return '';
  const mb = bytes / (1024 * 1024);
  return mb < 1 ? `${Math.max(1, Math.round(bytes / 1024))} KB` : `${mb.toFixed(1)} MB`;
}
