// Server-only catalog reads through the Admin SDK, cached under the 'catalog' tag.
// Admin edits call /api/revalidate, which expires the tag so pages update at once.
import { unstable_cache } from 'next/cache';
import { adminDb } from '@/lib/firebase/admin';
import { ALL_BRANCHES, Branch, DEFAULT_BRANCH_ID, Program, Resource, Subject } from './types';
import { byCode, byOrder, byResourceOrder, toBranch, toProgram, toResource, toSubject } from './convert';
import { canonicalSubjectPath } from './routes';
import type { SearchEntry } from './search';

export const CATALOG_TAG = 'catalog';
const CACHE = { tags: [CATALOG_TAG], revalidate: 3600 };

export const getPrograms = unstable_cache(
  async (): Promise<Program[]> => {
    const snapshot = await adminDb().collection('programs').get();
    return snapshot.docs.map((doc) => toProgram(doc.id, doc.data())).filter((p) => p.active).sort(byOrder);
  },
  ['catalog-programs'],
  CACHE
);

export async function getProgram(programId: string): Promise<Program | null> {
  return (await getPrograms()).find((p) => p.id === programId) ?? null;
}

export const getBranches = unstable_cache(
  async (programId: string): Promise<Branch[]> => {
    const snapshot = await adminDb().collection('programs').doc(programId).collection('branches').get();
    return snapshot.docs.map((doc) => toBranch(doc.id, programId, doc.data())).filter((b) => b.active).sort(byOrder);
  },
  ['catalog-branches'],
  CACHE
);

// Branches students pick from; branchless programs' hidden branch is excluded
export async function getVisibleBranches(program: Program): Promise<Branch[]> {
  const branches = await getBranches(program.id);
  return program.hasBranches ? branches.filter((b) => b.id !== DEFAULT_BRANCH_ID) : [];
}

export async function getBranch(program: Program, branchId: string): Promise<Branch | null> {
  const branches = await getBranches(program.id);
  const found = branches.find((b) => b.id === branchId);
  if (found) return found;
  // A branchless program works even before its hidden branch document exists
  return !program.hasBranches && branchId === DEFAULT_BRANCH_ID
    ? { id: DEFAULT_BRANCH_ID, programId: program.id, name: program.fullName, shortName: program.name, order: 1, active: true }
    : null;
}

// One query per program; semester lists and lookups filter this cached list
export const getProgramSubjects = unstable_cache(
  async (programId: string): Promise<Subject[]> => {
    const snapshot = await adminDb().collection('subjects').where('programId', '==', programId).get();
    return snapshot.docs.map((doc) => toSubject(doc.id, doc.data())).sort(byCode);
  },
  ['catalog-program-subjects'],
  CACHE
);

export function subjectOfferedIn(subject: Subject, branchId: string, semester: number): boolean {
  return subject.offerings.some(
    (o) => o.semester === semester && (o.branchId === branchId || o.branchId === ALL_BRANCHES)
  );
}

export async function getSemesterSubjects(programId: string, branchId: string, semester: number): Promise<Subject[]> {
  return (await getProgramSubjects(programId)).filter((s) => subjectOfferedIn(s, branchId, semester));
}

export async function getSubjectBySlug(programId: string, slug: string): Promise<Subject | null> {
  return (await getProgramSubjects(programId)).find((s) => s.slug === slug) ?? null;
}

// The owner's master switch (settings/site.materialLocked, flipped in the admin panel through
// /api/admin/material-lock). While it's on, no one but owners can read or see study material.
export async function readMaterialLocked(): Promise<boolean> {
  return (await adminDb().doc('settings/site').get()).get('materialLocked') === true;
}

// Cached with the catalog; flipping the switch revalidates CATALOG_TAG so it applies at once
export const getMaterialLocked = unstable_cache(readMaterialLocked, ['material-locked'], CACHE);

export const getResources = unstable_cache(
  async (subjectId: string): Promise<Resource[]> => {
    const snapshot = await adminDb().collection('resources').where('subjectId', '==', subjectId).get();
    return snapshot.docs.map((doc) => toResource(doc.id, doc.data())).sort(byResourceOrder);
  },
  ['catalog-resources'],
  CACHE
);

export const getSiteStats = unstable_cache(
  async () => {
    const db = adminDb();
    const programs = await getPrograms();
    const [subjects, resources, perProgram] = await Promise.all([
      db.collection('subjects').count().get(),
      db.collection('resources').count().get(),
      Promise.all(
        programs.map((p) => db.collection('subjects').where('programId', '==', p.id).count().get())
      ),
    ]);
    return {
      programs: programs.length,
      subjects: subjects.data().count,
      resources: resources.data().count,
      // programId → number of subjects
      programSubjects: Object.fromEntries(programs.map((p, i) => [p.id, perProgram[i].data().count])) as Record<string, number>,
    };
  },
  ['catalog-stats'],
  CACHE
);

export const getSearchIndex = unstable_cache(
  async (): Promise<SearchEntry[]> => {
    const entries: SearchEntry[] = [];
    for (const program of await getPrograms()) {
      const branches = await getVisibleBranches(program);
      for (const subject of await getProgramSubjects(program.id)) {
        const url = canonicalSubjectPath(program, branches, subject);
        const offering = subject.offerings[0];
        if (!url || !offering) continue;
        entries.push({
          code: subject.code,
          name: subject.name,
          program: program.name,
          branch: !program.hasBranches
            ? ''
            : offering.branchId === ALL_BRANCHES
              ? 'All branches'
              : (branches.find((b) => b.id === offering.branchId)?.shortName ?? ''),
          semester: offering.semester,
          url,
        });
      }
    }
    return entries;
  },
  ['catalog-search-index'],
  CACHE
);
