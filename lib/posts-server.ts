// Server-only reads of blog posts for server-rendered pages.
// Tagged with the catalog tag so admin edits (which call /api/revalidate) refresh them.
import { unstable_cache } from 'next/cache';
import { adminDb } from '@/lib/firebase/admin';
import { CATALOG_TAG } from '@/lib/catalog/server';
import { toMillis } from '@/lib/catalog/convert';

export interface PostView {
  id: string;
  title: string;
  description: string;
  content: string;
  type: 'blog' | 'notice' | 'article';
  mediaType: 'video' | 'article' | 'image' | 'file' | 'none';
  mediaUrl: string | null;
  mediaUrls: string[];
  fileUrl: string | null;
  fileName: string | null;
  author: string;
  createdAt: number;
  published: boolean;
}

export const getPost = unstable_cache(
  async (postId: string): Promise<PostView | null> => {
    const snap = await adminDb().collection('blogPosts').doc(postId).get();
    const d = snap.data();
    if (!d) return null;
    return {
      id: snap.id,
      title: d.title ?? '',
      description: d.description ?? '',
      content: d.content ?? '',
      type: d.type ?? 'blog',
      mediaType: d.mediaType ?? 'none',
      mediaUrl: d.mediaUrl ?? null,
      mediaUrls: d.mediaUrls ?? [],
      fileUrl: d.fileUrl ?? null,
      fileName: d.fileName ?? null,
      author: d.author ?? '',
      createdAt: toMillis(d.createdAt),
      published: d.published !== false,
    };
  },
  ['post'],
  { tags: [CATALOG_TAG], revalidate: 3600 }
);
