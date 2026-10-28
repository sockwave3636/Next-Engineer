"""Render a Next Engineer textbook Markdown file to styled, watermarked HTML.

Usage: python3 render_book.py book.md out.html
Then: node pdf.js out.html out.pdf

Book conventions (in the Markdown):
- "## Unit N: Title" starts a unit (new page, banner).
- "### Part N: Title" starts a part inside a unit.
- "**Que N.M.** question text" starts a long-answer question; "**Answer:**" follows it.
- "### Short-Answer Questions (2 marks)" and "### Practice Questions" end a unit.
- "```text" blocks are diagrams (light style); other fenced blocks are code (dark style).
- $...$ (inline) and $$...$$ (display) are typeset with KaTeX via katex_render.js; this needs
  `npm install katex` in this folder or a parent. Avoid a bare | inside maths in tables (use \\vert).
"""
import base64
import html
import json
import os
import re
import subprocess
import sys

import markdown
import yaml

TOOLS = os.path.dirname(os.path.abspath(__file__))

CSS = r"""
@page { size: A4; margin: 16mm 15mm 18mm 15mm; }
@page :first { margin: 0; }
:root {
  --ink: #1b1f2a; --muted: #5b6475; --line: #e3e7ef;
  --brand: #4f46e5; --brand-2: #0ea5e9; --soft: #f5f7ff; --que: #312e81;
}
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body { font-family: 'Inter', 'Noto Sans', sans-serif; color: var(--ink); font-size: 10.5pt; line-height: 1.6;
       -webkit-print-color-adjust: exact; print-color-adjust: exact; }

.watermark { position: fixed; inset: 0; display: flex; align-items: center; justify-content: center;
  z-index: 0; pointer-events: none; }
.watermark span { transform: rotate(-35deg); font-family: 'Inter Display', 'Inter', sans-serif; font-weight: 900;
  font-size: 58pt; letter-spacing: 3pt; color: var(--brand); opacity: 0.10; white-space: nowrap; text-align: center; line-height: 1.05; }
.watermark small { display: block; font-size: 18pt; letter-spacing: 6pt; font-weight: 700; }
main { position: relative; z-index: 1; }

/* Full-page cover */
.cover { height: 297mm; width: 210mm; padding: 34mm 22mm 24mm; color: #fff; position: relative; overflow: hidden;
  background: linear-gradient(150deg, #1e1b4b 0%, #312e81 35%, #4f46e5 70%, #0ea5e9 100%); break-after: page;
  display: flex; flex-direction: column; }
.cover::before { content: ""; position: absolute; right: -90px; top: -90px; width: 340px; height: 340px; border-radius: 50%;
  background: rgba(255,255,255,0.08); }
.cover::after { content: ""; position: absolute; left: -120px; bottom: -120px; width: 380px; height: 380px; border-radius: 50%;
  background: rgba(255,255,255,0.06); }
.cover .brandline { font-size: 10pt; letter-spacing: 4pt; text-transform: uppercase; font-weight: 800; opacity: 0.95; }
.cover .kind { margin-top: 40mm; font-size: 11pt; letter-spacing: 3pt; text-transform: uppercase; opacity: 0.85; font-weight: 700; }
.cover h1 { font-family: 'Inter Display', 'Inter', sans-serif; font-size: 40pt; line-height: 1.08; margin: 6px 0 12px; font-weight: 900; }
.cover .code { display: inline-block; background: rgba(255,255,255,0.18); border: 1px solid rgba(255,255,255,0.4);
  padding: 4px 14px; border-radius: 999px; font-weight: 800; font-size: 13pt; width: max-content; }
.cover .sub { font-size: 12.5pt; opacity: 0.92; margin-top: 16px; max-width: 150mm; }
.cover .units { margin-top: 18mm; display: grid; gap: 8px; max-width: 150mm; }
.cover .units div { background: rgba(255,255,255,0.12); border-radius: 10px; padding: 8px 14px; font-size: 10.5pt; }
.cover .units b { display: inline-block; width: 64px; letter-spacing: 1pt; font-size: 9pt; opacity: 0.85; }
.cover .chips { margin-top: auto; display: flex; flex-wrap: wrap; gap: 6px; }
.cover .chip { background: rgba(255,255,255,0.15); border-radius: 8px; padding: 4px 10px; font-size: 9pt; }
.cover .edition { margin-top: 10px; font-size: 9pt; opacity: 0.8; }

/* Contents */
.toc { break-after: page; }
.toc h2 { border-left-color: var(--brand-2); }
.toc .u { margin: 10px 0 2px; font-weight: 800; color: #1e1b4b; font-size: 11.5pt; }
.toc .u span { color: var(--brand); margin-right: 8px; }
.toc .p { margin: 1px 0 1px 22px; color: var(--muted); font-size: 9.8pt; }

h2 { font-family: 'Inter Display', 'Inter', sans-serif; font-size: 16pt; margin: 0 0 12px; padding: 12px 16px;
  border-radius: 12px; background: var(--soft); border-left: 6px solid var(--brand); color: #1e1b4b; }
section.misc { break-before: page; }
section.unit { break-before: page; }
.unit-banner { border-radius: 16px; padding: 22px 24px; color: #fff; margin-bottom: 16px;
  background: linear-gradient(135deg, #312e81 0%, #4f46e5 60%, #0ea5e9 100%); }
.unit-banner .n { font-size: 10pt; letter-spacing: 4pt; font-weight: 800; opacity: 0.85; }
.unit-banner .t { font-family: 'Inter Display', 'Inter', sans-serif; font-size: 22pt; font-weight: 900; line-height: 1.15; margin-top: 4px; }

h3 { font-size: 13pt; margin: 20px 0 10px; padding: 7px 12px; border-radius: 8px; break-after: avoid; }
h3.part { background: #eef2ff; color: #312e81; border-left: 5px solid var(--brand); }
h3.overview { background: #ecfeff; color: #155e75; border-left: 5px solid var(--brand-2); }
h3.short { background: #fef2f2; color: #991b1b; border-left: 5px solid #ef4444; break-before: page; }
h3.practice { background: #fffbeb; color: #92400e; border-left: 5px solid #f59e0b; }
h4 { font-size: 11pt; margin: 12px 0 6px; color: #1e1b4b; }

.que { margin: 18px 0 8px; padding: 9px 14px; border-radius: 10px; background: #f5f3ff; border: 1px solid #ddd6fe;
  break-after: avoid; font-weight: 600; color: #1e1b4b; }
.que .qn { display: inline-block; background: var(--brand); color: #fff; font-size: 8.8pt; font-weight: 800;
  padding: 1px 9px; border-radius: 999px; margin-right: 8px; letter-spacing: 0.4pt; }
.ans { margin: 4px 0 6px; font-weight: 800; color: #047857; font-size: 9.5pt; letter-spacing: 1.5pt; text-transform: uppercase; }
.saq { margin: 10px 0 2px; font-weight: 700; color: #7f1d1d; break-after: avoid; }

p { margin: 6px 0; }
ul, ol { margin: 6px 0; padding-left: 22px; }
li { margin: 3px 0; }
strong { color: #111827; }

table { width: 100%; border-collapse: separate; border-spacing: 0; margin: 8px 0 12px; font-size: 9.4pt;
  border: 1px solid var(--line); border-radius: 10px; background: #fff; }
tr { break-inside: avoid; }
th { background: #eef2ff; color: #312e81; text-align: left; font-weight: 700; padding: 6px 8px; border-bottom: 1px solid var(--line); }
td { padding: 5px 8px; border-bottom: 1px solid #f0f2f7; vertical-align: top; }
tr:nth-child(even) td { background: #fafbff; }
tr:last-child td { border-bottom: none; }

code { font-family: 'JetBrains Mono', 'DejaVu Sans Mono', monospace; font-variant-ligatures: none;
  font-feature-settings: "liga" 0, "calt" 0; font-size: 8.8pt; background: #f1f5f9; padding: 1px 4px; border-radius: 4px; color: #0f172a; }
pre { background: #0f172a; color: #e2e8f0; border-radius: 10px; padding: 10px 12px; font-size: 8.4pt; line-height: 1.45;
  overflow: hidden; white-space: pre-wrap; break-inside: avoid; border-left: 4px solid #f59e0b; }
pre code { background: none; color: inherit; padding: 0; font-size: inherit; }
pre.diagram { background: #f8fafc; color: #1e293b; border: 1px solid #e2e8f0; border-left: 4px solid var(--brand-2);
  font-family: 'DejaVu Sans Mono', monospace; white-space: pre; }
pre.diagram code { font-family: 'DejaVu Sans Mono', monospace; }

hr { display: none; }
blockquote { margin: 8px 0; padding: 8px 12px; background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; }
.math-display { margin: 8px 0; overflow: hidden; break-inside: avoid; }
.katex { font-size: 1.08em; }
.tip { background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 10px; padding: 8px 12px; margin: 10px 0; }
.remember { background: #fffbeb; border: 1px solid #fcd34d; border-radius: 10px; padding: 8px 12px; margin: 10px 0; }
.mistake { background: #fef2f2; border: 1px solid #fecaca; border-radius: 10px; padding: 8px 12px; margin: 10px 0; }
.pyq { display: inline-block; background: #eef2ff; color: #3730a3; border: 1px solid #c7d2fe; border-radius: 6px; font-size: 0.78em; font-weight: 700; padding: 0 6px; margin-left: 4px; white-space: nowrap; }
"""


def h3_class(title):
    t = title.lower()
    if t.startswith("part"):
        return "part"
    if t.startswith("unit overview"):
        return "overview"
    if t.startswith("short-answer"):
        return "short"
    if t.startswith("practice"):
        return "practice"
    return "part"


def prep_markdown(text):
    # Python-Markdown needs a blank line before lists and tables
    fixed, in_code = [], False
    for line in text.split("\n"):
        if line.startswith("```"):
            in_code = not in_code
        if not in_code and fixed and fixed[-1].strip():
            prev = fixed[-1].lstrip()
            starts_table = line.startswith("|") and not prev.startswith("|")
            is_item = re.match(r"(- |\d+\. )", line)
            prev_item = re.match(r"(- |\d+\. )", prev) or fixed[-1].startswith("  ")
            ends_table = prev.startswith("|") and not line.startswith("|")
            ends_list = prev_item and not is_item and not line.startswith(" ")
            if starts_table or ends_table or ends_list or (is_item and not prev_item):
                fixed.append("")
        fixed.append(line)
    return "\n".join(fixed)


def extract_math(text):
    """Swap $$..$$ and $..$ outside code blocks for placeholders; return text and the snippets."""
    snippets = []

    def keep(tex, display):
        snippets.append({"tex": tex.strip(), "display": display})
        return f"KATEXMATH{len(snippets) - 1}X"

    out = []
    for i, chunk in enumerate(re.split(r"(```.*?```)", text, flags=re.S)):
        if i % 2 == 1:
            out.append(chunk)
            continue
        chunk = re.sub(r"\$\$(.+?)\$\$", lambda m: "\n\n" + keep(m.group(1), True) + "\n\n", chunk, flags=re.S)
        chunk = re.sub(r"(?<![\\$])\$([^$\n]+?)\$", lambda m: keep(m.group(1), False), chunk)
        out.append(chunk)
    return "".join(out), snippets


def render_math(snippets):
    if not snippets:
        return [], ""
    res = subprocess.run(["node", os.path.join(TOOLS, "katex_render.js")], input=json.dumps(snippets),
                         capture_output=True, text=True, check=True, cwd=TOOLS)
    if res.stderr:
        sys.stderr.write(res.stderr)
    css_path = subprocess.run(["node", "-p", "require.resolve('katex/dist/katex.min.css')"],
                              capture_output=True, text=True, check=True, cwd=TOOLS).stdout.strip()
    css = open(css_path, encoding="utf-8").read()
    font_dir = os.path.join(os.path.dirname(css_path), "fonts")

    def inline_font(m):
        name = m.group(1)
        data = base64.b64encode(open(os.path.join(font_dir, name), "rb").read()).decode()
        return f"url(data:font/woff2;base64,{data}) format(\"woff2\")"

    css = re.sub(r"url\(fonts/([^)]+?\.woff2)\) format\(\"woff2\"\)", inline_font, css)
    css = re.sub(r",url\(fonts/[^)]+?\.(woff|ttf)\) format\(\"(woff|truetype)\"\)", "", css)
    return json.loads(res.stdout), css


def main(src, dst):
    text = open(src, encoding="utf-8").read()
    meta = {}
    m = re.match(r"^---\n(.*?)\n---\n", text, re.S)
    if m:
        meta = yaml.safe_load(m.group(1)) or {}
        text = text[m.end():]
    text = re.sub(r"^# .*\n", "", text, count=1, flags=re.M)
    text, snippets = extract_math(text)
    text = prep_markdown(text)

    md = markdown.Markdown(extensions=["tables", "fenced_code", "sane_lists"])
    body = md.convert(text)

    rendered, katex_css = render_math(snippets)
    for i, h in reversed(list(enumerate(rendered))):
        token = f"KATEXMATH{i}X"
        if snippets[i]["display"]:
            body = body.replace(f"<p>{token}</p>", f'<div class="math-display">{h}</div>')
        body = body.replace(token, h)

    # Diagrams vs code
    body = body.replace('<pre><code class="language-text">', '<pre class="diagram"><code>')
    # Questions and answers
    body = re.sub(r"<p><strong>Que (\d+\.\d+)\.</strong>\s*(.*?)</p>",
                  r'<div class="que"><span class="qn">Que \1</span>\2</div>', body, flags=re.S)
    body = body.replace("<p><strong>Answer:</strong></p>", '<div class="ans">Answer</div>')
    body = re.sub(r"<p><strong>(Q\d+\..*?)</strong>\s*", r'<p class="saq">\1</p><p>', body)
    body = re.sub(r"<p><strong>Exam tip:</strong>(.*?)</p>", r'<div class="tip"><strong>Exam tip:</strong>\1</div>', body, flags=re.S)
    body = re.sub(r"<p><strong>Remember:</strong>(.*?)</p>", r'<div class="remember"><strong>Remember:</strong>\1</div>', body, flags=re.S)
    body = re.sub(r"<p><strong>Common mistake:</strong>(.*?)</p>", r'<div class="mistake"><strong>Common mistake:</strong>\1</div>', body, flags=re.S)
    body = re.sub(r"\[PYQ ([^\]<]+)\]", r'<span class="pyq">PYQ \1</span>', body)

    toc = []
    parts = re.split(r"(?=<h2>)", body)
    out = []
    for part in parts:
        if not part.strip():
            continue
        hm = re.match(r"<h2>(.*?)</h2>", part)
        if not hm:
            out.append(f'<section class="intro">{part}</section>')
            continue
        title = hm.group(1)
        rest = part[hm.end():]
        um = re.match(r"Unit (\d+):\s*(.*)", title)
        if um:
            heading = f'<div class="unit-banner"><div class="n">UNIT {um.group(1)}</div><div class="t">{um.group(2)}</div></div>'
            cls = "unit"
            toc.append(f'<div class="u"><span>Unit {um.group(1)}</span>{um.group(2)}</div>')
        else:
            heading = f"<h2>{title}</h2>"
            cls = "misc"
            toc.append(f'<div class="u">{title}</div>')

        def style_h3(mm):
            inner = mm.group(1)
            c = h3_class(re.sub("<.*?>", "", inner))
            if c == "part":
                toc.append(f'<div class="p">{inner}</div>')
            return f'<h3 class="{c}">{inner}</h3>'

        rest = re.sub(r"<h3>(.*?)</h3>", style_h3, rest)
        out.append(f'<section class="{cls}">{heading}{rest}</section>')

    units = meta.get("units", [])
    unit_list = "".join(f"<div><b>UNIT {i}</b>{html.escape(u)}</div>" for i, u in enumerate(units, 1))
    branches = ", ".join(b.upper() for b in meta.get("branches", []))
    chips = [
        ("Program", "B.Tech" if meta.get("program") == "btech" else meta.get("program", "")),
        ("Branches", branches),
        ("Semester", meta.get("semester", "")),
        ("Credits", meta.get("credits", "")),
        ("L-T-P", meta.get("ltp", "")),
        ("Scheme", meta.get("scheme", "")),
    ]
    chip_html = "".join(f'<span class="chip"><b>{k}:</b> {html.escape(str(v))}</span>' for k, v in chips if v)

    page = f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<title>{html.escape(meta.get('code', ''))} {html.escape(meta.get('name', ''))} | Next Engineer</title>
<style>{katex_css}{CSS}</style></head>
<body>
<div class="watermark"><span>NEXT ENGINEER<small>_sheerat_</small></span></div>
<main>
<div class="cover">
  <div class="brandline">Next Engineer · _sheerat_</div>
  <div class="kind">Complete Textbook</div>
  <h1>{html.escape(meta.get('name', ''))}</h1>
  <span class="code">{html.escape(meta.get('code', ''))}</span>
  <div class="sub">{html.escape(meta.get("subtitle", "Full syllabus, unit by unit: theory in question-answer form, diagrams, algorithms, C programs, solved numericals and 2-mark questions"))}</div>
  <div class="units">{unit_list}</div>
  <div class="chips">{chip_html}</div>
  <div class="edition">{html.escape(meta.get('edition', ''))}</div>
</div>
<section class="toc"><h2>Contents</h2>{''.join(toc)}</section>
{''.join(out)}
</main>
</body></html>"""
    open(dst, "w", encoding="utf-8").write(page)


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
