const assert=require('node:assert/strict'),{chromium}=require('./runtime.js'),path=require('node:path'),{pathToFileURL}=require('node:url');
const url=pathToFileURL(path.resolve(__dirname,'../index.html')).href;
(async()=>{const b=await chromium.launch();try{
for(const [width,locale] of [[320,'pt-BR'],[320,'en'],[390,'pt-BR'],[390,'en'],[412,'pt-BR'],[412,'en']]){
const c=await b.newContext({isMobile:true,hasTouch:true,offline:true,locale,viewport:{width,height:740},timezoneId:'America/Sao_Paulo'}),p=await c.newPage(),net=[],err=[];
p.on('pageerror',e=>err.push(e.message));p.on('request',r=>{if(/^https?:/.test(r.url()))net.push(r.url());});
await p.goto(url);await p.evaluate(()=>{plan.days[0]=cleanSession({title:'Synthetic Test',items:[make('bw-deadbug'),make('mob-open'),make('press')]});save();setDay(0);});
const cards=p.locator('.train-card'),card=i=>cards.nth(i),icon=i=>card(i).locator('[data-training-guide]'),panel=i=>card(i).locator('.training-inline-guide'),snap=()=>p.evaluate(()=>JSON.stringify(localStorage));
await card(0).locator('[data-current-exercise]').tap();await card(0).locator('[data-complete-set]').tap();
const before=await snap();
assert.equal(await cards.locator('summary').count(),0);
assert.equal(await icon(0).getAttribute('aria-controls'),await panel(0).getAttribute('id'));
assert.equal(await panel(0).locator('svg').count(),0);
await icon(0).tap();assert.equal(await icon(0).getAttribute('aria-expanded'),'true');
assert(await panel(0).isVisible());assert(!(await p.locator('#exerciseGuide').isVisible()));
assert(await panel(0).locator('h3').evaluate(x=>x===document.activeElement));
assert.equal(await panel(0).locator('figure svg').count(),2);
assert.match(await panel(0).innerText(),locale==='pt-BR'?/perna oposta/:/opposite leg/);
assert.equal(await panel(0).locator('img').count(),0);assert.deepEqual(net,[]);
await panel(0).locator('[data-tip-toggle]').tap();assert(await panel(0).locator('[data-tip-status]').isVisible());assert.equal(await panel(0).locator('figure svg').count(),2);
await icon(1).tap();assert(!await panel(0).isVisible());assert(await panel(1).isVisible());assert.match(await panel(1).innerText(),locale==='pt-BR'?/mantenha-os juntos/:/keep them together/);
await p.keyboard.press('Escape');assert(!await panel(1).isVisible());assert(await icon(1).evaluate(x=>x===document.activeElement));
await icon(2).tap();const close=panel(2).locator('[data-training-guide-close]');const box=await close.boundingBox();assert.equal(box.height,44);assert.equal(box.width,44);
assert(await panel(2).locator('a.guide-online').count());await close.tap();assert(await icon(2).evaluate(x=>x===document.activeElement));
assert.equal(await card(0).locator('[data-current-exercise]').getAttribute('aria-pressed'),'true');
assert.equal(await card(0).locator('input:checked').count(),1);assert.equal(await snap(),before);
await card(2).locator('[data-edit-weight]').tap();assert(await p.locator('#weightDialog').isVisible());await p.locator('#weightCancel').tap();
await card(2).locator('[data-edit-routine]').tap();assert(await p.locator('#doseSets').isVisible());await p.locator('#weightCancel').tap();
assert.equal(await snap(),before);
await p.evaluate(()=>{setMode(true);$('libraryPanel').open=true;choose('bw-deadbug');});
await p.locator('#libraryGuideButton [data-guide]').tap();assert(await p.locator('#exerciseGuide').isVisible());await p.locator('#guideClose').tap();
assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth),width);
assert.deepEqual(err,[]);assert.deepEqual(net,[]);console.log('PASS',width,locale,'single inline, focus, exact pose/cues, optional media fallback, library modal, unchanged marks/current/storage');await c.close();
}
}finally{await b.close();}})().catch(e=>{console.error(e);process.exitCode=1});
