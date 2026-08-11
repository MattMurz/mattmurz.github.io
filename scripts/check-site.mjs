import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.argv[2] ? path.resolve(process.argv[2]) : process.cwd();
const required = Array.of(
  'index.html',
  'style.css',
  'google0ad6223d442a6e87.html',
  'miarka/index.html',
  'miarka/styles.css',
  'miarka/app.js',
  'miarka/sample-a4.jpg',
  'miarka/src/cv/detectA4.js',
  'miarka/src/cv/warp.js',
  'miarka/src/ui/konvaLayer.js',
  'marketing/source/marketing-pack.json',
  'marketing/generated/marketing-pack.md',
  'marketing/generated/review-manifest.json',
  'docs/MARKETING_RECOVERY.md',
);

const missing = required.filter((relativePath) => !fs.existsSync(path.join(root, relativePath)));
if (missing.length) throw new Error(`Missing required files: ${missing.join(', ')}`);

if (fs.existsSync(path.join(root, 'google0ad6223d442a6e87(1).html'))) {
  throw new Error('Duplicate Google verification file with suffix (1) must not be published.');
}

for (const relativePath of Array.of(
  'miarka/app.js',
  'miarka/src/cv/detectA4.js',
  'miarka/src/cv/warp.js',
  'miarka/src/ui/konvaLayer.js',
)) {
  new vm.Script(fs.readFileSync(path.join(root, relativePath), 'utf8'), { filename: relativePath });
}

for (const htmlPath of Array.of('index.html', 'miarka/index.html')) {
  const absoluteHtmlPath = path.join(root, htmlPath);
  const html = fs.readFileSync(absoluteHtmlPath, 'utf8');
  const references = Array.from(html.matchAll(/(?:src|href)="([^"]+)"/g), (match) => match[1]);

  for (const reference of references) {
    if (/^(?:https?:|data:|mailto:|tel:|#)/.test(reference)) continue;
    const cleanReference = reference.split(/[?#]/, 1)[0];
    let target = cleanReference.startsWith('/')
      ? path.join(root, cleanReference.slice(1))
      : path.resolve(path.dirname(absoluteHtmlPath), cleanReference);
    if (cleanReference.endsWith('/')) target = path.join(target, 'index.html');
    if (!fs.existsSync(target)) throw new Error(`${htmlPath} references missing file: ${reference}`);
  }
}

const miarkaHtml = fs.readFileSync(path.join(root, 'miarka/index.html'), 'utf8');
for (const id of Array.of('file', 'fileName', 'sampleBtn', 'autoDetectBtn', 'result', 'inputCanvas', 'warpedCanvas')) {
  if (!miarkaHtml.includes(`id="${id}"`)) throw new Error(`Miarka is missing required element: ${id}`);
}

console.log(`Site check passed with ${required.length} required files.`);
