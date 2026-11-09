import { saveUploadChunk } from '@/lib/server/contributions';
import { errorResponse, requireUser } from '@/lib/server/http';

// POST ?id=…&index=…  body: raw bytes of one part of the student's PDF
export async function POST(request: Request) {
  try {
    const user = await requireUser(request);
    const params = new URL(request.url).searchParams;
    await saveUploadChunk(user, params.get('id'), Number(params.get('index')), new Uint8Array(await request.arrayBuffer()));
    return Response.json({ ok: true });
  } catch (error) {
    return errorResponse(error);
  }
}
