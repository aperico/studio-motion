const assert = require('node:assert/strict');
const { chromium } = require('./runtime.js');
const { pathToFileURL } = require('node:url');
const path = require('node:path');
const BASE = process.env.STUDIO_QA_URL || pathToFileURL(path.resolve(__dirname, '../index.html')).href;

(async () => {
 const browser = await chromium.launch();
 try {
  for (const [width, locale, zoom] of [[320,'pt-BR',2],[390,'en',1],[412,'pt-BR',1.5]]) {
   const context = await browser.newContext({viewport:{width,height:760}, locale, isMobile:true, hasTouch:true, reducedMotion:'no-preference'});
   const page = await context.newPage(), errors = [], external = [];
   page.on('pageerror', e => errors.push(e.message));
   page.on('request', r => { if (/^https?:/.test(r.url()) && !r.url().startsWith(BASE)) external.push(r.url()); });
   await page.goto(BASE);
   await page.addStyleTag({content:'html{font-size:'+zoom*100+'%}body{font-size:1rem}'});
   await page.evaluate(() => {
    plan.days[0] = cleanSession({title:'Synthetic protected day',items:[make('bb-bench',10)]});
    save();
   });
   const storage = () => page.evaluate(() => JSON.stringify(localStorage));
   const before = await storage();
   const cards = page.locator('#weekCards .week-card'), checks = page.locator('#weekCards input');
   const map = index => cards.nth(index).locator('.week-draft-map svg');
   const expected = () => page.evaluate(() => proposedWeek.drafts.map(draft => {
    if (!draft || draft.rest) return [];
    return [...new Set(draft.items.flatMap(row => forTarget(byId(row.exercise))[0]))].sort();
   }));
   const actual = () => page.locator('#weekCards .week-card').evaluateAll(rows => rows.map(row =>
    [...row.querySelectorAll('.week-draft-map [data-region]')].map(n => n.dataset.region).sort()
   ));
   await page.locator('#weekGenerate').click();
   assert.equal(await cards.count(),7);
   assert.deepEqual(await actual(),await expected());
   assert(!await checks.nth(0).isChecked());
   assert(await map(0).isVisible()); // Protected day still has a clearly labeled proposal, not a saved map.
   assert.match(await page.locator('#weekDraftMapNote').innerText(),locale==='pt-BR'?/propostas.*selecionados/:/proposed.*selected/);
   assert.equal(await map(0).getAttribute('role'),'img');
   assert.match(await map(0).getAttribute('aria-label'),locale==='pt-BR'?/Áreas principais/:/Main areas/);
   assert.equal(await map(0).locator('g').count(),2);
   assert(await map(6).isVisible());
   assert.equal(await page.locator('#weekCards .week-draft-thumb svg').count(),0);
   const exercises = cards.nth(0).locator('[data-week-exercises]');
   await exercises.locator('summary').click();
   const thumbs = exercises.locator('.week-draft-thumb svg');
   await thumbs.first().waitFor();
   assert.equal(await thumbs.count(),await exercises.locator('li .draft-exercise-title').count());
   assert.match(await exercises.locator('.draft-exercise-title').first().innerText(),/\s·\s/);
   assert.equal(await thumbs.first().getAttribute('aria-hidden'),'true');
   const firstPose = await thumbs.first().innerHTML(); await page.waitForTimeout(120);
   assert.equal(await thumbs.first().innerHTML(),firstPose); // Static rather than observed animation.
   assert(!await checks.nth(0).isChecked());
   assert.equal(await storage(),before);
   assert.equal(await page.evaluate(() => document.documentElement.scrollWidth),width);
   assert(await page.locator('#weekPreview').evaluate(d => d.scrollWidth<=d.clientWidth+1));
   const firstCard = await cards.first().elementHandle();
   await page.locator('#regenerateWeek').click();
   assert.equal(await firstCard.evaluate(e => e.isConnected),false);
   assert.deepEqual(await actual(),await expected());
   assert.equal(await page.locator('#weekCards .week-draft-thumb svg').count(),0);
   assert.equal(await storage(),before);
   await page.locator('#weekClose').click();
   await page.evaluate(() => { for (const box of document.querySelectorAll('#trainingEquipment input')) box.checked=false; });
   await page.locator('#weekGenerate').click();
   assert.equal(await map(0).count(),0);
   assert(await checks.nth(0).isDisabled());
   assert.equal(await page.locator('#weekCards .week-draft-map svg').count(),1);
   assert(await map(6).isVisible());
   assert.equal(await storage(),before);
   if (!BASE.startsWith('file:')) {
    await page.evaluate(() => navigator.serviceWorker.ready);
    await page.waitForFunction(() => Boolean(navigator.serviceWorker.controller));
    await context.setOffline(true); await page.reload(); await page.locator('#weekGenerate').click();
    assert(await map(0).isVisible());
    await page.locator('[data-week-exercises="0"] summary').click();
    await page.locator('[data-week-exercises="0"] .week-draft-thumb svg').first().waitFor();
    assert.equal(await storage(),before);
   }
   assert.deepEqual(errors,[]);assert.deepEqual(external,[]);
   console.log(width,locale,zoom+'×: proposed primary maps, lazy thumbnails, no unavailable maps, regeneration, protected save state PASS');
   await context.close();
  }
 } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode=1; });
