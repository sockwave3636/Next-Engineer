// Mini projects: each is bought on its own (pass scope project:{id}) and kept for good.
// Plain serialisable data, like lib/catalog/types.ts. Firestore holds projects/{id};
// scripts/upload-projects.mjs writes them, the admin panel sets price and published.

export type ProjectLevel = 'easy' | 'medium' | 'hard';

// badge: the CSS class of the level's label (app/globals.css)
export const PROJECT_LEVELS: { id: ProjectLevel; label: string; hint: string; badge: string }[] = [
  { id: 'easy', label: 'Easy', hint: 'Suits semester 3', badge: 'badge-leaf' },
  { id: 'medium', label: 'Medium', hint: 'Suits semester 5', badge: 'badge-brand' },
  { id: 'hard', label: 'Hard', hint: 'Suits semester 7', badge: 'badge-sun' },
];

export function projectLevel(level: ProjectLevel) {
  return PROJECT_LEVELS.find((l) => l.id === level) ?? PROJECT_LEVELS[0];
}

// Whole rupees, for a project that doesn't set its own price
export const DEFAULT_PROJECT_PRICE = 49;

// A bought project never expires, but every pass stores an expiry, so it's set this far ahead
export const PROJECT_ACCESS_DAYS = 365 * 100;

// A PDF that opens in the read-only reader. Free ones (the synopsis) need only a sign-in.
export interface ProjectDocument {
  id: string; // synopsis, guide, report, viva…
  title: string;
  free: boolean;
  sizeBytes: number | null;
}

export interface ProjectScreenshot {
  file: string; // file name under the project's preview folder
  caption: string;
}

export interface Project {
  id: string; // URL slug: student-attendance-manager
  number: number; // position in the project list, for ordering
  title: string;
  // One line, for cards and search results
  summary: string;
  overview: string[]; // paragraphs
  features: string[];
  tech: string[];
  level: ProjectLevel;
  // Where it fits. Empty branchIds means every branch of those programs.
  programIds: string[];
  branchIds: string[];
  semesters: number[];
  subjectCodes: string[]; // BCC351, BCS554…
  buildTime: string; // "8–10 hours"
  // Free preview of the full viva set
  sampleViva: { question: string; answer: string }[];
  documents: ProjectDocument[];
  // The zip buyers download: source code, editable report and slides
  download: { fileName: string; sizeBytes: number | null; contents: string[] } | null;
  screenshots: ProjectScreenshot[];
  price: number;
  published: boolean;
  aiGenerated: boolean;
  updatedAt: number;
}

export function projectPath(project: Pick<Project, 'id'>): string {
  return `/projects/${project.id}`;
}

export function projectImagePath(projectId: string, file: string): string {
  return `/projects/${projectId}/images/${encodeURIComponent(file)}`;
}

type Data = Record<string, unknown> & { [key: string]: any }; // eslint-disable-line @typescript-eslint/no-explicit-any

const strings = (value: unknown): string[] => (Array.isArray(value) ? value.filter((v): v is string => typeof v === 'string') : []);

// Firestore data → Project. Storage paths stay on the server: they're never copied here.
export function toProject(id: string, d: Data): Project {
  const millis = d.updatedAt?.toMillis?.() ?? (typeof d.updatedAt === 'number' ? d.updatedAt : 0);
  return {
    id,
    number: typeof d.number === 'number' ? d.number : 999,
    title: d.title ?? id,
    summary: d.summary ?? '',
    overview: strings(d.overview),
    features: strings(d.features),
    tech: strings(d.tech),
    level: PROJECT_LEVELS.some((l) => l.id === d.level) ? d.level : 'easy',
    programIds: strings(d.programIds),
    branchIds: strings(d.branchIds),
    semesters: Array.isArray(d.semesters) ? d.semesters.filter((s: unknown): s is number => typeof s === 'number') : [],
    subjectCodes: strings(d.subjectCodes),
    buildTime: d.buildTime ?? '',
    sampleViva: Array.isArray(d.sampleViva)
      ? d.sampleViva
          .filter((v: Data) => typeof v?.question === 'string' && typeof v?.answer === 'string')
          .map((v: Data) => ({ question: v.question, answer: v.answer }))
      : [],
    documents: Array.isArray(d.documents)
      ? d.documents
          .filter((doc: Data) => typeof doc?.id === 'string')
          .map((doc: Data) => ({ id: doc.id, title: doc.title ?? doc.id, free: doc.free === true, sizeBytes: doc.sizeBytes ?? null }))
      : [],
    download: d.download?.fileName
      ? { fileName: d.download.fileName, sizeBytes: d.download.sizeBytes ?? null, contents: strings(d.download.contents) }
      : null,
    screenshots: Array.isArray(d.screenshots)
      ? d.screenshots.filter((s: Data) => typeof s?.file === 'string').map((s: Data) => ({ file: s.file, caption: s.caption ?? '' }))
      : [],
    price: typeof d.price === 'number' && d.price >= 1 ? d.price : DEFAULT_PROJECT_PRICE,
    published: d.published === true,
    aiGenerated: d.aiGenerated !== false,
    updatedAt: millis,
  };
}
