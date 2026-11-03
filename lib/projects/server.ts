// Server-only project reads through the Admin SDK, cached with the catalog (tag 'catalog'),
// so admin edits and the master lock refresh them through the same revalidation.
import { unstable_cache } from 'next/cache';
import { adminDb } from '@/lib/firebase/admin';
import { CATALOG_TAG } from '@/lib/catalog/server';
import { Project, toProject } from './types';

// Published projects in list order. Drafts never reach public pages.
export const getProjects = unstable_cache(
  async (): Promise<Project[]> => {
    const snapshot = await adminDb().collection('projects').where('published', '==', true).get();
    return snapshot.docs.map((doc) => toProject(doc.id, doc.data())).sort((a, b) => a.number - b.number);
  },
  ['projects'],
  { tags: [CATALOG_TAG], revalidate: 3600 }
);

export async function getProject(projectId: string): Promise<Project | null> {
  return (await getProjects()).find((p) => p.id === projectId) ?? null;
}
