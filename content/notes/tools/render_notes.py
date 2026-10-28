"""Render a Next Engineer notes Markdown file to styled, watermarked HTML.

Usage: python3 render_notes.py notes.md out.html
Then: node pdf.js out.html out.pdf
"""
import html
import re
import sys

import markdown
import yaml

SECTION_STYLES = {
    "2-mark definitions": ("defs", "✍️"),
    "core concepts": ("concepts", "💡"),
    "solved examples": ("examples", "🧮"),
    "code to remember": ("code", "⌨️"),
    "important questions": ("questions", "⭐"),
}

CSS = r"""
@page { size: A4; margin: 16mm 14mm 18mm 14mm; }
:root {
  --ink: #1b1f2a; --muted: #5b6475; --line: #e3e7ef;
  --brand: #4f46e5; --brand-2: #0ea5e9; --soft: #f5f7ff;
  --defs: #0ea5e9; --concepts: #8b5cf6; --examples: #10b981; --code: #f59e0b; --questions: #ef4444;
}
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body { font-family: 'Inter', 'Noto Sans', sans-serif; color: var(--ink); font-size: 10.4pt; line-height: 1.55;
       -webkit-print-color-adjust: exact; print-color-adjust: exact; }

/* Watermark: fixed elements repeat on every printed page */
.watermark { position: fixed; inset: 0; display: flex; align-items: center; justify-content: center;
  z-index: 0; pointer-events: none; }
.watermark span { transform: rotate(-35deg); font-family: 'Inter Display', 'Inter', sans-serif; font-weight: 900;
  font-size: 58pt; letter-spacing: 3pt; color: var(--brand); opacity: 0.10; white-space: nowrap; text-align: center; line-height: 1.05; }
.watermark small { display: block; font-size: 18pt; letter-spacing: 6pt; font-weight: 700; }
main { position: relative; z-index: 1; }

/* Cover */
.cover { border-radius: 18px; padding: 26px 28px 24px; color: #fff; margin-bottom: 18px;
  background: linear-gradient(135deg, #312e81 0%, #4f46e5 55%, #0ea5e9 100%); position: relative; overflow: hidden; }
.cover::after { content: ""; position: absolute; right: -60px; top: -60px; width: 220px; height: 220px; border-radius: 50%;
  background: rgba(255,255,255,0.10); }
.brandline { font-size: 9pt; letter-spacing: 3pt; text-transform: uppercase; font-weight: 700; opacity: 0.9; }
.cover h1 { font-family: 'Inter Display', 'Inter', sans-serif; font-size: 26pt; line-height: 1.15; margin: 8px 0 4px; font-weight: 800; }
.cover .code { display: inline-block; background: rgba(255,255,255,0.18); border: 1px solid rgba(255,255,255,0.35);
  padding: 2px 10px; border-radius: 999px; font-weight: 700; font-size: 10pt; }
.cover .sub { font-size: 11pt; opacity: 0.92; margin-top: 2px; }
.chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 14px; }
.chip { background: rgba(255,255,255,0.15); border-radius: 8px; padding: 4px 10px; font-size: 8.8pt; }
.chip b { font-weight: 700; }

.units-overview { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; margin: 0 0 16px; }
.uo { border: 1px solid var(--line); border-radius: 10px; padding: 8px 10px; background: #fff; }
.uo .n { font-size: 8pt; font-weight: 800; color: var(--brand); letter-spacing: 1pt; }
.uo .t { font-size: 8.8pt; font-weight: 600; line-height: 1.3; }

/* Headings */
h1 { font-size: 18pt; }
h2 { font-family: 'Inter Display', 'Inter', sans-serif; font-size: 16pt; margin: 0 0 12px; padding: 12px 16px;
  border-radius: 12px; background: var(--soft); border-left: 6px solid var(--brand); color: #1e1b4b; }
h2 .badge { display: inline-block; background: var(--brand); color: #fff; font-size: 9pt; font-weight: 800;
  padding: 2px 9px; border-radius: 999px; margin-right: 8px; vertical-align: 3px; letter-spacing: 0.5pt; }
section.unit { break-before: page; }
section.intro h2, section.misc h2 { border-left-color: var(--brand-2); }
h3 { font-size: 12.5pt; margin: 18px 0 8px; padding-bottom: 4px; border-bottom: 2px solid var(--line); }
h3 .ico { margin-right: 6px; }
h2, h3 { break-after: avoid; }
h3.defs { color: #0369a1; border-color: var(--defs); }
h3.concepts { color: #6d28d9; border-color: var(--concepts); }
h3.examples { color: #047857; border-color: var(--examples); }
h3.code { color: #b45309; border-color: var(--code); }
h3.questions { color: #b91c1c; border-color: var(--questions); }

.box { border-radius: 10px; padding: 4px 14px; margin: 0 0 10px; }
.box.defs { background: #f0f9ff; border: 1px solid #bae6fd; }
.box.questions { background: #fef2f2; border: 1px solid #fecaca; }
.box.examples p strong:first-child { color: #047857; }

p { margin: 6px 0; }
ul, ol { margin: 6px 0; padding-left: 20px; }
li { margin: 3px 0; }
strong { color: #111827; }

table { width: 100%; border-collapse: separate; border-spacing: 0; margin: 8px 0 12px; font-size: 9.4pt;
  border: 1px solid var(--line); border-radius: 10px; background: #fff; }
tr { break-inside: avoid; }
th { background: #eef2ff; color: #312e81; text-align: left; font-weight: 700; padding: 6px 8px; border-bottom: 1px solid var(--line); }
td { padding: 5px 8px; border-bottom: 1px solid #f0f2f7; vertical-align: top; }
tr:nth-child(even) td { background: #fafbff; }
tr:last-child td { border-bottom: none; }

code { font-family: 'JetBrains Mono', 'DejaVu Sans Mono', monospace; font-variant-ligatures: none; font-feature-settings: "liga" 0, "calt" 0; font-size: 8.8pt; background: #f1f5f9;
  padding: 1px 4px; border-radius: 4px; color: #0f172a; }
pre { background: #0f172a; color: #e2e8f0; border-radius: 10px; padding: 10px 12px; font-size: 8.4pt; line-height: 1.45;
  overflow: hidden; white-space: pre-wrap; break-inside: avoid; border-left: 4px solid var(--code); }
pre code { background: none; color: inherit; padding: 0; font-size: inherit; }

hr { display: none; }
blockquote { margin: 8px 0; padding: 8px 12px; background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 8px; }

/* Checklist */
li.task { list-style: none; margin-left: -18px; }
li.task::before { content: "☐"; margin-right: 8px; color: var(--brand); font-weight: 700; }
.tip { background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 10px; padding: 8px 12px; margin: 10px 0; }
"""


def slug_section(title):
    t = title.lower()
    for key, val in SECTION_STYLES.items():
        if t.startswith(key):
            return val
    return None


def main(src, dst):
    text = open(src, encoding="utf-8").read()
    meta = {}
    m = re.match(r"^---\n(.*?)\n---\n", text, re.S)
    if m:
        meta = yaml.safe_load(m.group(1)) or {}
        text = text[m.end():]

    # Drop the Markdown H1; the cover replaces it
    text = re.sub(r"^# .*\n", "", text, count=1, flags=re.M)
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
    text = "\n".join(fixed)
    # GitHub-style task list items
    text = re.sub(r"^- \[ \] ", "- @@TASK@@", text, flags=re.M)

    md = markdown.Markdown(extensions=["tables", "fenced_code", "sane_lists"])
    body = md.convert(text)
    body = body.replace("<li>@@TASK@@", '<li class="task">')

    # Split into sections on <h2>
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
        um = re.match(r"Unit (\d+):\s*(.*)", title)
        if um:
            heading = f'<h2><span class="badge">UNIT {um.group(1)}</span>{um.group(2)}</h2>'
            cls = "unit"
        else:
            heading = f"<h2>{title}</h2>"
            cls = "misc"
        rest = part[hm.end():]

        # Style the h3 sub-sections and wrap definitions/questions in boxes
        def style_h3(sub):
            h3m = re.match(r"<h3>(.*?)</h3>", sub)
            if not h3m:
                return sub
            info = slug_section(re.sub("<.*?>", "", h3m.group(1)))
            if not info:
                return sub
            key, ico = info
            content = sub[h3m.end():]
            h = f'<h3 class="{key}"><span class="ico">{ico}</span>{h3m.group(1)}</h3>'
            if key in ("defs", "questions", "examples"):
                content = f'<div class="box {key}">{content}</div>' if key != "examples" else f'<div class="box examples">{content}</div>'
            return h + content

        subs = re.split(r"(?=<h3>)", rest)
        rest = "".join(style_h3(s) for s in subs)
        rest = re.sub(r"<p><strong>Exam tip:</strong>(.*?)</p>", r'<div class="tip"><strong>Exam tip:</strong>\1</div>', rest, flags=re.S)
        out.append(f'<section class="{cls}">{heading}{rest}</section>')

    units = meta.get("units", [])
    overview = "".join(
        f'<div class="uo"><div class="n">UNIT {i}</div><div class="t">{html.escape(u)}</div></div>'
        for i, u in enumerate(units, 1)
    )
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
<style>{CSS}</style></head>
<body>
<div class="watermark"><span>NEXT ENGINEER<small>_sheerat_</small></span></div>
<main>
<div class="cover">
  <div class="brandline">Next Engineer · _sheerat_</div>
  <h1>{html.escape(meta.get('name', ''))}</h1>
  <span class="code">{html.escape(meta.get('code', ''))}</span>
  <div class="sub">One-day revision notes: definitions, solved examples, code and important questions</div>
  <div class="chips">{chip_html}</div>
</div>
<div class="units-overview">{overview}</div>
{''.join(out)}
</main>
</body></html>"""
    open(dst, "w", encoding="utf-8").write(page)


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
