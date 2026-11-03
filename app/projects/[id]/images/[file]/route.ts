import { adminBucket } from '@/lib/firebase/admin';
import { getProject } from '@/lib/projects/server';

const CONTENT_TYPES: Record<string, string> = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp' };

// Screenshots of a published project: part of its free preview. They live in Storage under
// projects/{id}/preview/, which browsers can't read directly, so they're served from here.
export async function GET(_request: Request, { params }: { params: Promise<{ id: string; file: string }> }) {
  const { id, file } = await params;
  const listed = (await getProject(id))?.screenshots.some((shot) => shot.file === file);
  const contentType = CONTENT_TYPES[file.split('.').pop()?.toLowerCase() ?? ''];
  if (!listed || !contentType) {
    return new Response('Not found', { status: 404 });
  }
  try {
    const [bytes] = await adminBucket().file(`projects/${id}/preview/${file}`).download();
    return new Response(new Uint8Array(bytes), {
      headers: { 'Content-Type': contentType, 'Cache-Control': 'public, max-age=86400, s-maxage=86400' },
    });
  } catch {
    return new Response('Not found', { status: 404 });
  }
}
