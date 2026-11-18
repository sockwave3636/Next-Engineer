import type { MetadataRoute } from 'next';
import { getPrograms, getSearchIndex, getVisibleBranches } from '@/lib/catalog/server';
import { branchPath, programPath, semesterPath } from '@/lib/catalog/routes';
import { DEFAULT_BRANCH_ID } from '@/lib/catalog/types';
import { getPublishedPostDates } from '@/lib/posts-server';
import { getProjects } from '@/lib/projects/server';
import { projectPath } from '@/lib/projects/types';
import { SITE_URL } from '@/lib/site-url';

// Rebuilt daily from the cached catalog
export const revalidate = 86400;

const STATIC_PAGES = ['/', '/about', '/contact', '/contribute', '/boards', '/privacy-policy', '/terms', '/refund-policy'];

// Every public page: programs, branches, semesters, each subject at its canonical URL, the
// published mini projects, and the Updates posts (with the date each last changed)
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
  paths.push('/projects', ...(await getProjects()).map(projectPath));
  const pages: MetadataRoute.Sitemap = Array.from(new Set(paths)).map((path) => ({ url: path === '/' ? SITE_URL : `${SITE_URL}${path}` }));
  const posts = (await getPublishedPostDates().catch(() => [])).map((post) => ({
    url: `${SITE_URL}/blog/${post.id}`,
    ...(post.changedAt ? { lastModified: new Date(post.changedAt) } : {}),
  }));
  return [...pages, ...posts];
}
