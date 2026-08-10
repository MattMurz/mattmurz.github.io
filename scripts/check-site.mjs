import fs from 'node:fs';
import path from 'node:path';
const root = process.cwd();
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const required = ['tomato_bg.mp4','miarka/index.html'];
const missing = required.filter((item) => !fs.existsSync(path.join(root, item)));
if (missing.length) throw new Error('Missing required site assets: ' + missing.join(', '));
const approvedGallery = 'assets/work_013.jpg assets/work_167.jpg assets/work_208.jpg assets/work_249.jpg assets/work_101.jpg assets/work_106.jpg assets/work_111.jpg assets/work_151.jpg'.split(' ');
const galleryRefs = [...html.matchAll(/<div class="gallery">([\s\S]*?)<\/div>/g)].flatMap((match) => [...match[1].matchAll(/<img src="([^"]+)"/g)].map((image) => image[1]));
if (galleryRefs.length !== approvedGallery.length || galleryRefs.some((ref, index) => ref !== approvedGallery[index])) {
  throw new Error('Public gallery does not match the manually reviewed no-person asset list.');
}
const refs = [...html.matchAll(/(?:src|href)="([^"]+)"/g)].map((match) => match[1]).filter((ref) => !/^(?:https?:|#|\/)/.test(ref));
const missingRefs = refs.filter((ref) => !fs.existsSync(path.join(root, ref)));
if (missingRefs.length) throw new Error('Missing local references: ' + missingRefs.join(', '));
for (const script of [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((match) => match[1])) new Function(script);
console.log('Site check passed: ' + refs.length + ' local references and inline JavaScript.');
