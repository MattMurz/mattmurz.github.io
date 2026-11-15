import assert from 'node:assert/strict';
import fs from 'node:fs';
const html = fs.readFileSync('index.html', 'utf8');
const miarka = fs.readFileSync('miarka/index.html', 'utf8');
const widget = fs.readFileSync('feedback-widget.js', 'utf8');
const css = fs.readFileSync('feedback-widget.css', 'utf8');
for (const page of [html, miarka]) {
  assert.match(page, /href="\/feedback-widget\.css"/);
  assert.match(page, /src="\/feedback-widget\.js" defer/);
  assert.match(page, /mailto:profito\.systems@gmail\.com/);
}
for (const language of ['en','pl','de','fr','es']) assert.ok(widget.includes('    '+language+': {'), 'Missing language: '+language);
for (const token of ['dialog.showModal','aria-live','aria-labelledby','reportValidity',
  'window.location.pathname','encodeURIComponent','mailto:', 'navigator.clipboard.writeText']) {
  assert.ok(widget.includes(token), 'Missing safe feedback behaviour: ' + token);
}
assert.ok(!/fetch\s*\(|XMLHttpRequest|sendBeacon|localStorage|sessionStorage|indexedDB/i.test(widget));
assert.ok(widget.includes("const emailAddress = 'profito.systems@gmail.com'"));
assert.ok(!html.includes('Pay-for-success model still to be tested'));
assert.ok(!html.includes('fee would apply only'));
assert.ok(html.includes('Checkatrade') && html.includes('Taskrabbit'));
assert.ok(miarka.includes('Nie fotografuj danych karty płatniczej'));
assert.ok(css.includes(':focus-visible') && css.includes('::backdrop'));
console.log('Public beta feedback static/security checks PASS.');
