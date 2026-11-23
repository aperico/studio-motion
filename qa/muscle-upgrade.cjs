const assert = require('node:assert/strict');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const { chromium } = require('./runtime.js');
const root = path.resolve(__dirname, '..');
const old = Object.fromEntries(['index.html', 'sw.js'].map(file => [
  file, execFileSync('git', ['show', 'b487195:' + file], { cwd: root })
]));
(async () => {
  let upgrade = false;
  const server = http.createServer((req, res) => {
    const file = req.url === '/' ? 'index.html' : req.url.slice(1);
    try {
      res.setHeader('Content-Type', file.endsWith('.js') ? 'application/javascript' : file.endsWith('.html') ? 'text/html' : 'application/octet-stream');
      res.end(!upgrade && old[file] ? old[file] : fs.readFileSync(path.join(root, file)));
    } catch { res.writeHead(404).end(); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const browser = await chromium.launch();
  try {
    const context = await browser.newContext({ locale: 'pt-BR', viewport: { width: 320, height: 760 } });
    const page = await context.newPage();
    await page.goto('http://127.0.0.1:' + server.address().port);
    await page.waitForFunction(() => navigator.serviceWorker.controller);
    await page.evaluate(async () => {
      plan.days[day] = cleanSession({ title: 'Synthetic baseline', items: [{ ...make('abduct'), kg: 17 }] });
      await save();
      render();
    });
    await page.locator('#trainList input').first().check();
    const stored = await page.evaluate(() => JSON.stringify(localStorage));
    assert.match(await page.locator('#trainList .targets-text').innerText(), /Parte lateral do quadril/);
    upgrade = true;
    await page.evaluate(async () => (await navigator.serviceWorker.ready).update());
    await page.waitForFunction(async () => (await caches.keys()).some(key => key.endsWith(':v37')));
    await page.reload();
    assert.equal(await page.locator('.build').innerText(), 'v37');
    assert.match(await page.locator('#trainList .targets-text').innerText(), /Glúteos médio e mínimo.*TFL/);
    assert.equal(await page.evaluate(() => JSON.stringify(localStorage)), stored);
    await context.setOffline(true);
    await page.reload();
    assert.equal(await page.locator('#trainTitle').innerText(), 'Synthetic baseline');
    assert.equal(await page.locator('#trainList input:checked').count(), 1);
    console.log('PASS v36 to v37 service worker update, offline reload and exact saved-state preservation');
  } finally { await browser.close(); server.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
