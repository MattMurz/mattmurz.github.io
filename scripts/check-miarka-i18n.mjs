import fs from 'node:fs';
import assert from 'node:assert/strict';

const html = fs.readFileSync('miarka/index.html','utf8');
const css = fs.readFileSync('miarka/styles.css','utf8');
const strings = fs.readFileSync('miarka/i18n.js','utf8');
const app = fs.readFileSync('miarka/app.js','utf8');
assert.equal(html.match(/src="i18n.js" defer/g)?.length, 1);
assert.ok(html.indexOf('src="app.js"') < html.indexOf('src="i18n.js"'));
assert.ok(html.includes('href="/feedback-widget.css"') && html.includes('src="/feedback-widget.js"'));
for (const token of [
  "Wybierz wzorzec", "Choose a reference object", "Wskaż 4 narożniki ręcznie",
  "Mark 4 corners manually", "Calibration:", "Measurement", "Zgłoś błąd",
  "This is a public beta", "SetLanguage"
]) {
  // SetLanguage is lower-case in the actual API.
  if (token === 'SetLanguage') assert.ok(strings.includes('function setLanguage('));
  else assert.ok(strings.includes(token),token);
}
assert.ok(strings.includes("document.documentElement.lang = language"));
assert.ok(strings.includes("observer.observe(document.body"));
assert.ok(strings.includes("window.miarkaTranslate"));
assert.ok(!/fetch\s*\(|XMLHttpRequest|sendBeacon|localStorage|sessionStorage|navigator\.sendBeacon/i.test(strings));
assert.ok(!/\b[A-Z0-9._%+-]+@(gmail|outlook|hotmail)\.com\b/i.test(strings));
assert.ok(css.includes('.miarka-lang-switch') && css.includes(':focus-visible'));
assert.ok(app.includes("miarkaLocalized('Profito — pomiar orientacyjny ze zdjęcia')"));
assert.ok(app.includes("miarkaLocalized('szerokość')"));
assert.ok(app.includes("miarkaLocalized('wysokość')"));
assert.ok(!app.includes("import 'i18n"));
console.log('Miarka English/Polish static and privacy checks PASS.');
