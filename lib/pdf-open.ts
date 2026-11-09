import type { PDFDocumentLoadingTask } from 'pdfjs-dist/legacy/build/pdf.mjs';
import type { PdfByteSource } from './premium-client';

// PDF.js asks for bytes in chunks of this size; must stay below the API's 2 MB cap
const CHUNK_BYTES = 512 * 1024;

// Opens a PDF a chunk at a time through an authenticated byte source. Shared by the reader and
// the clean-copy builder. Scripts and forms inside a PDF never run here, and pages are only drawn.
export async function openPdf(source: PdfByteSource, onReadError: (error: unknown) => void): Promise<PDFDocumentLoadingTask> {
  const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');
  pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/legacy/build/pdf.worker.min.mjs', import.meta.url).toString();
  const size = await source.getSize();
  const transport = new pdfjs.PDFDataRangeTransport(size, null);
  const task = pdfjs.getDocument({
    range: transport,
    rangeChunkSize: CHUNK_BYTES,
    disableAutoFetch: true,
    disableStream: true,
  });
  transport.requestDataRange = (begin: number, end: number) => {
    source
      .getRange(begin, end)
      .then((chunk) => transport.onDataRange(begin, chunk))
      .catch((error) => {
        onReadError(error);
        task.destroy();
      });
  };
  return task;
}
