// Render TeX snippets to HTML with KaTeX. Reads a JSON array of {tex, display} on stdin,
// writes a JSON array of HTML strings. Needs `npm install katex` (here or in a parent folder).
const katex = require('katex');
let input = '';
process.stdin.on('data', (c) => (input += c));
process.stdin.on('end', () => {
  const items = JSON.parse(input);
  const out = items.map(({ tex, display }) => {
    try {
      return katex.renderToString(tex, { displayMode: display, throwOnError: true, output: 'html' });
    } catch (e) {
      process.stderr.write(`KaTeX error in: ${tex}\n  ${e.message}\n`);
      return `<code>${tex}</code>`;
    }
  });
  process.stdout.write(JSON.stringify(out));
  if (process.stderr.writableLength) process.exitCode = 0;
});
