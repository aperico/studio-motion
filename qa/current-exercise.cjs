const A=require('node:assert/strict'),{chromium}=require('./runtime.js');
(async()=>{const browser=await chromium.launch();try{
for(const [width,locale] of [[320,'pt-BR'],[390,'en-US'],[412,'pt-BR']]){
const c=await browser.newContext({isMobile:true,hasTouch:true,viewport:{width,height:720},locale,offline:true,timezoneId:'America/Sao_Paulo'}),p=await c.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));
await p.clock.install({time:new Date('2026-11-23T23:57:00-03:00')});await p.goto(require('node:url').pathToFileURL(require('node:path').resolve(__dirname,'../index.html')).href);
await p.evaluate(()=>{for(const i of [0,1])plan.days[i]=cleanSession({title:'Synthetic day',items:[{...make('press'),sets:2},{...make('row'),sets:2}]});save();setDay(0);});
const cards=p.locator('#trainList .train-card'),a=cards.nth(0).locator('[data-current-exercise]'),b=cards.nth(1).locator('[data-current-exercise]'),q=i=>cards.nth(i).locator('[data-complete-set]'), snap=()=>p.evaluate(()=>JSON.stringify(localStorage));
const before=await snap();
await a.tap();A.equal(await a.getAttribute('aria-pressed'),'true');A.equal(await b.getAttribute('aria-pressed'),'false');A.equal(await snap(),before);
await b.press('Space');A.equal(await a.getAttribute('aria-pressed'),'false');A.equal(await b.getAttribute('aria-pressed'),'true');A.equal(await snap(),before);
await q(1).tap();await q(1).tap();A.equal(await b.getAttribute('aria-pressed'),'true');A.equal(await q(1).getAttribute('aria-disabled'),'true');A.equal(await p.locator('#trainList input:checked').count(),2);A.equal(await p.locator('.train-card.is-next').count(),1);
await a.tap();await b.tap();A.equal(await b.getAttribute('aria-pressed'),'true');A.equal(await p.locator('#trainList input:checked').count(),2);
await cards.nth(1).locator('[data-edit-weight]').tap();await p.keyboard.press('Escape');A.equal(await b.getAttribute('aria-pressed'),'true');
await p.locator('[data-day="1"]').tap();A.equal(await p.locator('[data-current-exercise][aria-pressed=true]').count(),0);
await p.locator('[data-day="0"]').tap();A.equal(await b.getAttribute('aria-pressed'),'true');
await p.evaluate(()=>{saveSwap(dateForDay(day),current(),current().items[1],make('cable-chest'));renderTrainList();});A.equal(await b.getAttribute('aria-pressed'),'false');
await a.tap();await p.clock.fastForward(182000);A.equal(await a.getAttribute('aria-pressed'),'false');
A((await a.boundingBox()).height>=44);A.equal(await p.evaluate(()=>document.documentElement.scrollWidth),width);A.deepEqual(errors,[]);console.log('PASS',width,locale,'select/clear, completed cards, separate marks/weight/swap, date rollover, no storage, offline');await c.close();
}
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1});
