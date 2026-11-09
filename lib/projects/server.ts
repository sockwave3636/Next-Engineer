// Server-only project reads through the Admin SDK, cached with the catalog (tag 'catalog'),
// so admin edits and the master lock refresh them through the same revalidation.
import { unstable_cache } from 'next/cache';
import { adminDb } from '@/lib/firebase/admin';
import { CATALOG_TAG } from '@/lib/catalog/server';
import { Project, toProject } from './types';

// Whether students pay for projects (settings/site.projectsCharging). Off until an owner turns it
// on in the admin panel: projects are free meanwhile, and each one keeps its price for later.
export async function readProjectsCharging(): Promise<boolean> {
  return (await adminDb().doc('settings/site').get()).get('projectsCharging') === true;
}

// Flipping the switch revalidates CATALOG_TAG, so it applies at once
export const getProjectsCharging = unstable_cache(readProjectsCharging, ['projects-charging'], { tags: [CATALOG_TAG], revalidate: 86400 });

// Published projects in list order. Drafts never reach public pages.
export const getProjects = unstable_cache(
  async (): Promise<Project[]> => {
    const snapshot = await adminDb().collection('projects').where('published', '==', true).get();
    return snapshot.docs.map((doc) => toProject(doc.id, doc.data())).sort((a, b) => a.number - b.number);
  },
  ['projects'],
  { tags: [CATALOG_TAG], revalidate: 86400 }
);

export async function getProject(projectId: string): Promise<Project | null> {
  return (await getProjects()).find((p) => p.id === projectId) ?? null;
}
