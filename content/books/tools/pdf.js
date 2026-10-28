// Print a rendered notes page to PDF with a branded footer and page numbers.
// Usage: node pdf.js in.html out.pdf [preview.png]
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const [src, dst, png] = process.argv.slice(2);
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.resolve(src));
  await page.pdf({
    path: dst,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: `<div style="width:100%;font-family:Inter,sans-serif;font-size:8px;color:#6b7280;padding:0 14mm;display:flex;justify-content:space-between;">
      <span><b style="color:#4f46e5">Next Engineer</b> · _sheerat_</span>
      <span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>`,
  });
  if (png) {
    await page.setViewportSize({ width: 820, height: 1160 });
    await page.emulateMedia({ media: 'print' });
    await page.screenshot({ path: png, fullPage: false });
  }
  await browser.close();
})();
