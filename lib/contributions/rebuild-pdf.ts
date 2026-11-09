import { openPdf } from '@/lib/pdf-open';
import type { PdfByteSource } from '@/lib/premium-client';
import { buildImagePdf, ImagePage } from './image-pdf';

const MAX_PAGES = 200;
const PAGE_PIXEL_WIDTH = 1400;
const MAX_SCALE = 2.5;
const JPEG_QUALITY = 0.8;

// Makes the clean copy of a student's PDF that goes live: each page is drawn in the owner's
// browser and only the pictures are kept, so anything hidden in the original is left behind.
// The original stays in memory in the reader's sandbox and is never saved to the computer.
export async function rebuildPdfAsImages(source: PdfByteSource, onProgress: (done: number, total: number) => void): Promise<Uint8Array> {
  let readError: unknown = null;
  const task = await openPdf(source, (error) => {
    readError = error;
  });
  try {
    const pdf = await task.promise;
    if (pdf.numPages > MAX_PAGES) throw new Error(`This file has ${pdf.numPages} pages. The limit is ${MAX_PAGES}.`);
    const pages: ImagePage[] = [];
    for (let number = 1; number <= pdf.numPages; number++) {
      const page = await pdf.getPage(number);
      const size = page.getViewport({ scale: 1 });
      const viewport = page.getViewport({ scale: Math.min(PAGE_PIXEL_WIDTH / size.width, MAX_SCALE) });
      const canvas = document.createElement('canvas');
      canvas.width = Math.ceil(viewport.width);
      canvas.height = Math.ceil(viewport.height);
      const context = canvas.getContext('2d');
      if (!context) throw new Error('This browser could not draw the page.');
      // JPEG has no transparency, so transparent areas need paper behind them
      context.fillStyle = '#ffffff';
      context.fillRect(0, 0, canvas.width, canvas.height);
      await page.render({ canvas, canvasContext: context, viewport }).promise;
      const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/jpeg', JPEG_QUALITY));
      if (!blob) throw new Error('This browser could not save the page as an image.');
      pages.push({
        jpeg: new Uint8Array(await blob.arrayBuffer()),
        width: canvas.width,
        height: canvas.height,
        pageWidth: size.width,
        pageHeight: size.height,
      });
      page.cleanup();
      onProgress(number, pdf.numPages);
    }
    return buildImagePdf(pages);
  } catch (error) {
    throw readError ?? error;
  } finally {
    task.destroy();
  }
}
