// Builds cases/<slug>.html from content/<slug>.md.
// Run: node build-cases.mjs   (no dependencies)
import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
const ROOT = path.dirname(fileURLToPath(import.meta.url));
const CONTENT = path.join(ROOT, 'content');
const OUT = path.join(ROOT, 'cases');
const SITE = 'https://artemmdesign.ru'; // production domain for canonical / Open Graph URLs
fs.mkdirSync(OUT, { recursive: true });

// ---------- helpers ----------
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const inline = (s) => esc(s).replace(/&lt;br&gt;/g, '<br>').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

// JPEG dimensions without dependencies
function jpegSize(file) {
  const b = fs.readFileSync(file);
  let i = 2;
  while (i < b.length) {
    if (b[i] !== 0xff) { i++; continue; }
    const marker = b[i + 1];
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return { h: b.readUInt16BE(i + 5), w: b.readUInt16BE(i + 7) };
    }
    i += 2 + b.readUInt16BE(i + 2);
  }
  return { w: 0, h: 0 };
}

function srcSize(webFile) {
  const dir = path.dirname(webFile).replace(path.join(ROOT, "assets"), path.join(ROOT, "source")), base = path.basename(webFile).replace(/.jpg$/, "");
  if (!fs.existsSync(dir)) return null;
  const src = fs.readdirSync(dir).find((f) => f.startsWith("src-" + base + "."));
  if (!src) return null;
  const f = path.join(dir, src);
  if (/.png$/i.test(src)) { const buf = fs.readFileSync(f); return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) }; }
  return jpegSize(f);
}

function parseFront(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---\n/);
  const meta = {};
  for (const line of m[1].split('\n')) { const k = line.slice(0, line.indexOf(':')); meta[k.trim()] = line.slice(k.length + 1).trim(); }
  return { meta, body: md.slice(m[0].length) };
}

// ---------- markdown → html ----------
function render(body, slug) {
  const imgPath = (src) => src.startsWith('../') ? src : `../assets/cases/${slug}/${src}`;
  const imgFile = (src) => src.startsWith('../') ? path.join(OUT, src) : path.join(ROOT, 'assets/cases', slug, src);

  const lines = body.split('\n');
  const out = [];
  let list = null;          // 'ul' | 'ol'
  let images = [];          // pending consecutive images
  let inCols = false, colOpen = false;
  let inPersona = false, personaGrid = false, personaCell = false;
  let inCallout = false, inResult = false, lastLevel = 1;

  const closeList = () => { if (list) { out.push(`</${list}>`); list = null; } };
  const flushImages = () => {
    if (!images.length) return;
    const items = images.map((im) => {
      const f = imgFile(im.src); const d = jpegSize(f); const s = srcSize(f) || d; const r = d.h / d.w;
      const kind = im.wide ? "wide" : im.page ? "page" : r > 0.95 && s.w >= 1500 ? "page" : r > 1.15 ? "phone" : "wide";
      return { ...im, ...d, kind, tall: im.forceTall || (kind === "phone" ? r > 2.4 : kind === "page" && r > 1.6), portrait: kind !== "wide" };
    });
    const n = items.length;
    if (n === 1 && !items[0].portrait) {
      const im = items[0];
      out.push(`<figure class="fig fig--single reveal"><img src="${imgPath(im.src)}" width="${im.w}" height="${im.h}" alt="${esc(im.alt)}" loading="lazy"></figure>`);
    } else {
      const kinds = new Set(items.map((i) => i.kind));
      const strip = items.some((i) => i.strip);
      const soloPhone = n === 1 && items[0].kind === "phone";
      const cols = n === 1 ? 1 : (strip || (kinds.size === 1 && kinds.has("phone"))) ? 4 : 2;
      const solo = n !== 1 ? "" : items[0].kind === "phone" ? " max-width:300px" : items[0].tall ? " max-width:760px" : " max-width:900px";
      const hasTall = items.some((i) => i.tall);
      // a cropped long screen next to an uncropped one: the uncropped image sets the row height
      const mixed = hasTall && !strip && items.some((i) => !i.tall && i.portrait);
      // a lone phone screen sits beside the paragraph(s) that introduced it, not under them
      let sideStart = -1;
      if (soloPhone) { for (let k = out.length - 1; k >= 0; k--) { if (/^<h[23]/.test(out[k])) { sideStart = k + 1; break; } if (/^<\/?(figure|div|section)/.test(out[k])) break; } }
      if (sideStart >= 0 && sideStart < out.length) { out.splice(sideStart, 0, `<div class="side"><div class="side__text">`); out.push(`</div>`); }
      out.push(`<figure class="fig fig--grid fig--n${n}${kinds.has("page") ? " fig--pages" : ""}${strip ? " fig--strip" : ""}${mixed ? " fig--mixed" : ""} reveal" style="--n:${cols};${solo}">`);
      for (const im of items) {
        const span = !im.portrait && n > 1 && cols > 1 ? ' style="grid-column:1/-1"' : '';
        const cellCls = !im.portrait && strip ? "fig__cell fig__cell--wide" : "fig__cell";
        const img = `<img src="${imgPath(im.src)}" width="${im.w}" height="${im.h}" alt="${esc(im.alt)}" loading="lazy">`;
        const framed = im.tall || ((strip || soloPhone) && im.portrait);
        const fixed = (strip || soloPhone) && im.portrait;
        out.push(framed ? `<div class="fig__cell"${span}><div class="fig__tall${fixed ? " fig__tall--fixed" : ""}">${img}</div></div>` : `<div class="${cellCls}"${span}>${img}</div>`);
      }
      out.push(`</figure>`);
      if (sideStart >= 0) out.push(`</div>`);
    }
    images = [];
  };
  const closeColCell = () => { if (colOpen) { closeList(); out.push('</div>'); colOpen = false; } };
  const closePersonaCell = () => { if (personaCell) { closeList(); out.push('</div>'); personaCell = false; } };
  const closePersona = () => { if (inPersona) { closePersonaCell(); if (personaGrid) { out.push('</div>'); personaGrid = false; } out.push('</section>'); inPersona = false; } };
  const closeCols = () => { if (inCols) { closeColCell(); out.push('</div>'); inCols = false; } };

  for (let raw of lines) {
    const line = raw.trim();
    if (!line) { closeList(); continue; }

    if (line.startsWith('![')) { closeList(); const m = line.match(/^!\[([^\]]*)\]\(([^)]+)\)(\{(tall|strip|wide|page)\})?/); images.push({ alt: m[1], src: m[2], forceTall: m[4] === 'tall', strip: m[4] === 'strip', wide: m[4] === 'wide', page: m[4] === 'page' }); continue; }
    flushImages();

    if (line === ':::callout') { closeList(); out.push('<div class="callout">'); inCallout = true; continue; }
    if (line === ':::cols') { closeList(); out.push('<div class="cols">'); inCols = true; continue; }
    if (line === ':::') { closeList(); if (inCols) closeCols(); else if (inCallout) { out.push('</div>'); inCallout = false; } continue; }

    const h = line.match(/^(#{1,3}) (.+)/);
    if (h) {
      closeList();
      const srcLevel = h[1].length + 1; const text = inline(h[2]);
      const level = Math.min(srcLevel, lastLevel + 1); lastLevel = level;
      if (srcLevel === 2) { closePersona(); closeCols(); if (h[2] === 'Результат' && !inResult) { out.push('<div class="cs-result">'); inResult = true; } out.push(`<h2>${text}</h2>`); continue; }
      if (srcLevel === 3) {
        closePersona(); closeCols();
        if (/^Персона/.test(h[2])) { out.push(`<section class="persona"><h3>${text}</h3><div class="persona__grid">`); inPersona = true; personaGrid = true; continue; }
        out.push(`<h${level}>${text}</h${level}>`); continue;
      }
      if (inPersona) { closePersonaCell(); lastLevel = srcLevel - 1; out.push(`<div><p class="label">${text}</p>`); personaCell = true; continue; }
      if (inCols) { closeColCell(); lastLevel = srcLevel - 1; out.push(`<div><p class="label">${text}</p>`); colOpen = true; continue; }
      out.push(level === 3 ? `<h3 class="subhead">${text}</h3>` : `<h4>${text}</h4>`); continue;
    }
    if (line.startsWith('> ')) { closeList(); out.push(`<blockquote><p>${inline(line.slice(2))}</p></blockquote>`); continue; }
    if (line.startsWith('- ')) { if (list !== 'ul') { closeList(); out.push('<ul>'); list = 'ul'; } out.push(`<li>${inline(line.slice(2))}</li>`); continue; }
    const ol = line.match(/^\d+\. (.+)/);
    if (ol) { if (list !== 'ol') { closeList(); out.push('<ol>'); list = 'ol'; } out.push(`<li>${inline(ol[1])}</li>`); continue; }
    closeList();
    if (inPersona && !line.startsWith('**')) closePersona();
    out.push(`<p>${inline(line)}</p>`);
  }
  closeList(); flushImages(); closePersona(); closeCols();
  if (inResult) out.push('</div>');
  return out.join('\n');
}

// ---------- template ----------
const ARROW_R = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"/></svg>';
const ARROW_L = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 8H3M7 4 3 8l4 4"/></svg>';

function page(c, prev, next) {
  const heroSrc = c.hero.startsWith('../') ? c.hero : `../assets/cases/${c.slug}/${c.hero}`;
  const hd = jpegSize(c.hero.startsWith('../') ? path.join(OUT, c.hero) : path.join(ROOT, 'assets/cases', c.slug, c.hero));
  const heroAr = Math.min(1.7, Math.max(1.45, hd.w / hd.h)).toFixed(3);
  const thumb = (x) => x.hero.startsWith('../') ? x.hero : `../assets/cases/${x.slug}/${x.hero}`;
  return `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(c.title)} — Артем Мута</title>
<meta name="description" content="${esc(c.lead)}">
<meta property="og:title" content="${esc(c.title)} — кейс Артема Муты">
<meta property="og:description" content="${esc(c.lead)}">
<meta property="og:type" content="article">
<meta property="og:url" content="${SITE}/cases/${c.slug}.html">
<meta property="og:image" content="${SITE}/${heroSrc.split('../').join('')}">
<link rel="canonical" href="${SITE}/cases/${c.slug}.html">
<link rel="preload" href="../assets/fonts/golos-cyrillic.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="../assets/fonts/golos-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="icon" href="../assets/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="../assets/site.css">
</head>
<body>

<header class="nav">
  <div class="wrap">
    <a class="brand" href="../index.html" aria-label="Артем Мута — на главную">
      <span>Артем Мута</span>
    </a>
    <a class="btn btn--sm" href="mailto:artemdesigner.work@gmail.com">Написать ${ARROW_R}</a>
  </div>
</header>

<main id="top">
  <section class="cs-hero" aria-labelledby="cs-title">
    <div class="wrap">
      <div class="cs-hero__head">
        <div class="cs-hero__title">
          <a class="cs-back reveal" href="../index.html#projects" style="--i:0">${ARROW_L} Все проекты</a>
          <h1 id="cs-title" class="reveal" style="--i:1">${esc(c.title)}</h1>
          <p class="lede reveal" style="--i:2">${esc(c.lead)}</p>
        </div>
        <dl class="cs-meta reveal" style="--i:3">
          <div><dt>Роль</dt><dd>${esc(c.role)}</dd></div>
          <div><dt>Платформа</dt><dd>${esc(c.platform)}</dd></div>
          <div><dt>Фокус</dt><dd>${esc(c.focus)}</dd></div>
        </dl>
      </div>
      <figure class="cs-hero__media reveal" style="--i:2; --hero-ar:${heroAr}">
        <img src="${heroSrc}" width="${hd.w}" height="${hd.h}" alt="${esc(c.heroAlt)}" fetchpriority="high"${c.heroPos ? ` style="object-position:${c.heroPos}"` : ""}>
      </figure>
    </div>
  </section>

  <article class="cs-body">
    <div class="wrap">
      <div class="prose">
${c.html}
      </div>
    </div>
  </article>

  <nav class="cs-next" aria-label="Другие проекты">
    <div class="wrap">
      <div class="cs-next__grid">
        <a class="cs-next__link cs-next__link--prev" href="${prev.slug}.html">
          <span>${ARROW_L} Предыдущий проект</span>
          <strong>${esc(prev.title)}</strong>
          <img src="${thumb(prev)}" alt="" loading="lazy">
        </a>
        <a class="cs-next__link" href="${next.slug}.html">
          <span>Следующий проект ${ARROW_R}</span>
          <strong>${esc(next.title)}</strong>
          <img src="${thumb(next)}" alt="" loading="lazy">
        </a>
      </div>
      <div class="cs-contact">
        <p>Ищу проекты, связанные с проектированием цифровых продуктов</p>
        <div>
          <a class="btn btn--light" href="mailto:artemdesigner.work@gmail.com">Написать на почту</a>
          <a class="btn btn--outline-light" href="https://t.me/Artfreelancer" target="_blank" rel="noopener">Telegram</a>
        </div>
      </div>
    </div>
  </nav>
</main>

<footer class="footer">
  <div class="wrap">
    <span>© <span class="num">2026</span> Артем Мута</span>
    <nav aria-label="Контакты">
      <a href="mailto:artemdesigner.work@gmail.com">artemdesigner.work@gmail.com</a>
      <a href="https://t.me/Artfreelancer" target="_blank" rel="noopener">Telegram</a>
    </nav>
  </div>
</footer>

<script>
  document.documentElement.classList.add('js');
  const els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    els.forEach(el => io.observe(el));
  } else { els.forEach(el => el.classList.add('in')); }
</script>
</body>
</html>
`;
}

// ---------- build ----------
const cases = fs.readdirSync(CONTENT).filter((f) => f.endsWith('.md')).map((f) => {
  const { meta, body } = parseFront(fs.readFileSync(path.join(CONTENT, f), 'utf8'));
  return { ...meta, order: Number(meta.order), html: render(body, meta.slug) };
}).sort((a, b) => a.order - b.order);

for (let i = 0; i < cases.length; i++) {
  const prev = cases[(i - 1 + cases.length) % cases.length];
  const next = cases[(i + 1) % cases.length];
  const file = path.join(OUT, `${cases[i].slug}.html`);
  fs.writeFileSync(file, page(cases[i], prev, next));
  console.log('built', path.relative(ROOT, file), Math.round(fs.statSync(file).size / 1024) + 'KB');
}
