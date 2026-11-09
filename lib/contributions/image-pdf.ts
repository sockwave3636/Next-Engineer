// Writes a PDF that holds nothing but one JPEG per page: no scripts, attachments, links or
// document details from whatever file the pictures were drawn from.

export interface ImagePage {
  jpeg: Uint8Array;
  // Pixel size of the JPEG
  width: number;
  height: number;
  // Page size in PDF points
  pageWidth: number;
  pageHeight: number;
}

const encoder = new TextEncoder();

export function buildImagePdf(pages: ImagePage[]): Uint8Array {
  const parts: Uint8Array[] = [];
  const offsets: number[] = [];
  let length = 0;

  const write = (chunk: Uint8Array | string) => {
    const bytes = typeof chunk === 'string' ? encoder.encode(chunk) : chunk;
    parts.push(bytes);
    length += bytes.length;
  };
  const beginObject = (id: number) => {
    offsets[id] = length;
    write(`${id} 0 obj\n`);
  };

  write('%PDF-1.4\n');
  // Objects 1 and 2 are the catalog and page list; each page then takes three: page, drawing, image
  const pageId = (index: number) => 3 + index * 3;
  beginObject(1);
  write('<< /Type /Catalog /Pages 2 0 R >>\nendobj\n');
  beginObject(2);
  write(`<< /Type /Pages /Count ${pages.length} /Kids [${pages.map((_, i) => `${pageId(i)} 0 R`).join(' ')}] >>\nendobj\n`);

  pages.forEach((page, index) => {
    const id = pageId(index);
    const width = page.pageWidth.toFixed(2);
    const height = page.pageHeight.toFixed(2);
    beginObject(id);
    write(
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${width} ${height}] ` +
        `/Resources << /XObject << /Im0 ${id + 2} 0 R >> >> /Contents ${id + 1} 0 R >>\nendobj\n`
    );
    const drawing = `q ${width} 0 0 ${height} 0 0 cm /Im0 Do Q\n`;
    beginObject(id + 1);
    write(`<< /Length ${drawing.length} >>\nstream\n${drawing}endstream\nendobj\n`);
    beginObject(id + 2);
    write(
      `<< /Type /XObject /Subtype /Image /Width ${page.width} /Height ${page.height} /ColorSpace /DeviceRGB ` +
        `/BitsPerComponent 8 /Filter /DCTDecode /Length ${page.jpeg.length} >>\nstream\n`
    );
    write(page.jpeg);
    write('\nendstream\nendobj\n');
  });

  const objectCount = 2 + pages.length * 3;
  const tableStart = length;
  write(`xref\n0 ${objectCount + 1}\n0000000000 65535 f \n`);
  for (let id = 1; id <= objectCount; id++) {
    write(`${String(offsets[id]).padStart(10, '0')} 00000 n \n`);
  }
  write(`trailer\n<< /Size ${objectCount + 1} /Root 1 0 R >>\nstartxref\n${tableStart}\n%%EOF\n`);

  const result = new Uint8Array(length);
  let position = 0;
  for (const part of parts) {
    result.set(part, position);
    position += part.length;
  }
  return result;
}
