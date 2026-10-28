// Firestore document data → catalog types. Shared by server reads (Admin SDK)
// and the admin panel (client SDK), so both see the same defaults.
import { Branch, Program, Resource, Subject } from './types';

type Data = Record<string, unknown> & { [key: string]: any }; // eslint-disable-line @typescript-eslint/no-explicit-any

export const toMillis = (value: unknown): number =>
  value && typeof (value as { toMillis?: () => number }).toMillis === 'function'
    ? (value as { toMillis: () => number }).toMillis()
    : typeof value === 'number'
      ? value
      : 0;

export function toProgram(id: string, d: Data): Program {
  return {
    id,
    name: d.name ?? id,
    fullName: d.fullName ?? d.name ?? id,
    level: d.level === 'PG' ? 'PG' : 'UG',
    durationYears: d.durationYears ?? 4,
    semesters: d.semesters ?? 8,
    hasBranches: !!d.hasBranches,
    order: d.order ?? 99,
    active: d.active !== false,
    description: d.description ?? '',
  };
}

export function toBranch(id: string, programId: string, d: Data): Branch {
  return {
    id,
    programId,
    name: d.name ?? id,
    shortName: d.shortName ?? d.name ?? id,
    order: d.order ?? 99,
    active: d.active !== false,
    semesterPasses: d.semesterPasses ?? {},
  };
}

export function toSubject(id: string, d: Data): Subject {
  return {
    id,
    code: d.code ?? id.toUpperCase(),
    name: d.name ?? '',
    slug: d.slug ?? id,
    credits: d.credits ?? 0,
    kind: d.kind ?? 'theory',
    group: d.group ?? '',
    unitTitles: d.unitTitles ?? [],
    description: d.description ?? '',
    programId: d.programId,
    offerings: d.offerings ?? [],
    offeringKeys: d.offeringKeys ?? [],
    pass: d.pass,
    resourceCounts: d.resourceCounts ?? {},
  };
}

// includePrivate: the admin panel needs storagePath to delete files; public pages must not get it
export function toResource(id: string, d: Data, includePrivate = false): Resource {
  return {
    id,
    subjectId: d.subjectId,
    type: d.type ?? 'notes',
    title: d.title ?? '',
    unit: d.unit ?? null,
    year: d.year ?? null,
    session: d.session ?? null,
    premium: !!d.premium,
    // Files open only in the reader; older records may still carry a download link
    fileUrl: null,
    storagePath: includePrivate ? (d.storagePath ?? null) : null,
    url: d.url ?? null,
    fileName: d.fileName ?? null,
    sizeBytes: d.sizeBytes ?? null,
    createdAt: toMillis(d.createdAt),
  };
}

export const byOrder = <T extends { order: number; name: string }>(a: T, b: T) =>
  a.order - b.order || a.name.localeCompare(b.name);

export const byCode = <T extends { code: string }>(a: T, b: T) =>
  a.code.localeCompare(b.code, undefined, { numeric: true });

export const byResourceOrder = (a: Resource, b: Resource) =>
  (a.unit ?? 99) - (b.unit ?? 99) || (b.year ?? '').localeCompare(a.year ?? '') || a.title.localeCompare(b.title);
