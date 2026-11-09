import { saveCleanChunk } from '@/lib/server/contributions';
import { errorResponse, requireOwner } from '@/lib/server/http';

// POST ?id=…&index=…  body: raw bytes of one part of the clean copy built in the owner's browser
export async function POST(request: Request) {
  try {
    await requireOwner(request);
    const params = new URL(request.url).searchParams;
    await saveCleanChunk(params.get('id'), Number(params.get('index')), new Uint8Array(await request.arrayBuffer()));
    return Response.json({ ok: true });
  } catch (error) {
    return errorResponse(error);
  }
}
