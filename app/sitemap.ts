import type { MetadataRoute } from 'next';
import { getPrograms, getSearchIndex, getVisibleBranches } from '@/lib/catalog/server';
import { branchPath, programPath, semesterPath } from '@/lib/catalog/routes';
import { DEFAULT_BRANCH_ID } from '@/lib/catalog/types';
import { SITE_URL } from '@/lib/site-url';

// Rebuilt hourly from the cached catalog
export const revalidate = 3600;

const STATIC_PAGES = ['/', '/about', '/contact', '/privacy-policy', '/terms', '/refund-policy'];

// Every public page: programs, branches, semesters, and each subject at its canonical URL
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const paths = [...STATIC_PAGES];
  for (const program of await getPrograms()) {
    paths.push(programPath(program));
    const branchIds = program.hasBranches ? (await getVisibleBranches(program)).map((b) => b.id) : [DEFAULT_BRANCH_ID];
    for (const branchId of branchIds) {
      if (program.hasBranches) paths.push(branchPath(program, branchId));
      for (let semester = 1; semester <= program.semesters; semester++) {
        paths.push(semesterPath(program, branchId, semester));
      }
    }
  }
  paths.push(...(await getSearchIndex()).map((entry) => entry.url));
  return Array.from(new Set(paths)).map((path) => ({ url: path === '/' ? SITE_URL : `${SITE_URL}${path}` }));
}
