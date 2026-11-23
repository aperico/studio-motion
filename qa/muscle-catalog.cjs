const assert = require('node:assert/strict');
const { chromium } = require('./runtime.js');
const { pathToFileURL } = require('node:url');
const path = require('node:path');
(async () => {
  const browser = await chromium.launch();
  try {
    for (const [locale, width] of [['pt-BR', 320], ['en', 390]]) {
      const page = await browser.newPage({ locale, viewport: { width, height: 760 }, offline: true });
      await page.goto(pathToFileURL(path.resolve(__dirname, '../index.html')).href);
      const catalog = await page.evaluate(() => E.map(e => ({
        id: e.id, name: nameOf(e), equipment: e.eq, rig: e.f,
        focus: namesOf(forTarget(e)[0]), supports: namesOf(forTarget(e)[1]),
        explicit: Object.hasOwn(targets, e.id)
      })));
      assert.equal(catalog.length, 95);
      assert(catalog.every(e => e.focus && e.explicit));
      for (const [id, expected] of [['abduct', ['abductors', 'tfl']], ['press', ['pec', 'tri']], ['db-incline', ['pec', 'tri']], ['bb-rdl', ['ham', 'glute']]]) {
        await page.evaluate(id => choose(id), id);
        const map = page.locator('#selectionMap [data-region]');
        const regions = await map.evaluateAll(nodes => nodes.map(node => node.dataset.region));
        expected.forEach(region => assert(regions.includes(region), id));
        if (id === 'abduct') {
          assert(!regions.includes('ham'));
          const label = await page.locator('#muscle').innerText();
          assert.match(label, locale === 'en' ? /Gluteus medius and minimus/ : /Glúteos médio e mínimo/);
          assert.match(label, /TFL/);
          assert.equal(await page.locator('#libraryDiagram [data-target="tfl"]').count(), 1);
        }
      }
      await page.evaluate(() => {
        for (const id of ['bw-lunge','bb-thrust','bb-calf','bw-close','cable-pallof']) {
          const exercise = byId(id);
          if (!draw(exercise, 0, 'start') || !draw(exercise, 1, 'finish')) throw Error(id);
        }
      });
      const edits = await page.evaluate(() => ({
        lunge: byId('bw-lunge').p[12] !== byId('bw-lunge').q[12],
        thrust: draw(byId('bb-thrust'), 1, 'thrust').includes('data-equipment="bench"'),
        calf: draw(byId('bb-calf'), 1, 'calf').includes('data-equipment="shoulder-bar"'),
        hands: draw(byId('bw-close'), 1, 'close').includes('data-hand-position="close"'),
        pallof: byId('cable-pallof').p.slice(0, 6).every((v, i) => v === byId('cable-pallof').q[i]),
        mobility: workoutOverview([{ exercise: 'mob-brace', sets: 1 }]).primary.length === 0
      }));
      assert(Object.values(edits).every(Boolean));
      if (process.argv.includes('--manifest')) console.log(JSON.stringify({ locale, catalog }));
      else console.log(locale, width, 'offline catalog and representative map checks passed');
      await page.close();
    }
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
