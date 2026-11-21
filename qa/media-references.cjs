const assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const {pathToFileURL}=require('node:url'),path=require('node:path');
const base=process.env.STUDIO_QA_URL||pathToFileURL(path.resolve(__dirname,'../index.html')).href;
(async()=>{const b=await chromium.launch();try{
for(const [width,locale] of [[320,'pt-BR'],[390,'en']]){
 const c=await b.newContext({viewport:{width,height:740},locale,hasTouch:true,isMobile:true,timezoneId:'America/Chicago'});
 const p=await c.newPage(),errs=[],external=[];p.on('pageerror',e=>errs.push(e.message));p.on('request',r=>{if(/^https?:/.test(r.url())&&!r.url().startsWith(base))external.push(r.url());});
 await p.clock.install({time:new Date('2026-11-23T18:00:00Z')});await p.goto(base);
 const catalog=await p.evaluate(()=>({
  counts:[E.length,Object.keys(shortDemos).length,Object.keys(inlineFormImages).length],
  uncovered:E.filter(e=>!guideSource(e)&&!inlineFormImages[e.id]).map(e=>e.id),
  native:E.filter(e=>guidePoses(e).includes('<svg')).length,
  nonHttps:Object.values(shortDemos).filter(row=>!row[3].startsWith('https://')).length,
  nonLicensedInline:Object.values(inlineFormImages).filter(row=>!row.every(url=>url.startsWith('https://fitness.raturi.in/'))).length,
  unknown:[...Object.keys(shortDemos),...Object.keys(inlineFormImages)].filter(id=>!byId(id)),
 }));
 assert.deepEqual(catalog,{counts:[95,87,21],uncovered:['mob-heel'],native:95,nonHttps:0,nonLicensedInline:0,unknown:[]});
 await p.evaluate(()=>{plan.days[0]=cleanSession({title:'Synthetic source coverage',items:['bb-shrug','bw-bridge','mob-heel'].map(id=>make(id))});save();setDay(0);});
 const row=i=>p.locator('#trainList .train-card').nth(i),open=i=>row(i).locator('[data-training-guide]').click(),panel=i=>row(i).locator('.training-inline-guide');
 const prior=await p.evaluate(()=>JSON.stringify(localStorage));
 await open(0);assert.equal(external.length,0);assert.equal(await p.locator('dialog[open]').count(),0);
 const link=panel(0).locator('.tip-media a');
 assert.match(await link.getAttribute('href'),/strengthlog\.com.*Barbell-Shrug\.gif/);
 assert.equal(await link.getAttribute('rel'),'noopener noreferrer');assert.equal(await link.getAttribute('target'),'_blank');
 assert.equal(await panel(0).locator('iframe,video,img').count(),0);
 await open(2);assert(!await panel(0).isVisible());assert.equal(await panel(2).locator('.tip-media').count(),0);assert(await panel(2).locator('.inline-guide-art svg').count());
 await open(1);assert.equal(external.length,0);assert.equal(await panel(1).locator('img').count(),0);
 if(!base.startsWith('file:')){
  const reply=p.waitForResponse(r=>r.url().startsWith('https://fitness.raturi.in/_astro/glute-bridge'));
  await panel(1).locator('[data-tip-toggle]').click();assert((await reply).ok());
  await p.waitForFunction(()=>document.querySelector('.training-inline-guide [data-tip-art] img')?.naturalWidth>0);
  assert.match(await panel(1).locator('.tip-media figcaption').innerText(),/Nitin Raturi · CC BY 4.0/);
  assert.equal(c.pages().length,1);assert.equal(external.length,1);await panel(1).locator('[data-training-guide-close]').click();
  await c.setOffline(true);await open(1);
  await panel(1).locator('[data-tip-toggle]').click();assert(await panel(1).locator('[data-tip-source]').isVisible());
  assert.equal(external.length,1);assert(await panel(1).locator('.inline-guide-art svg').count());
  await c.setOffline(false);
 }
 assert.equal(await p.evaluate(()=>JSON.stringify(localStorage)),prior);
 assert.deepEqual(errs,[]);assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth),width);
 console.log(width,locale,'95 local guides, 94 optional refs, exact shrug link and licensed bridge image, zero prefetch, offline fallback and unchanged storage PASS');
 await c.close();
}
}finally{await b.close();}})().catch(e=>{console.error(e);process.exitCode=1});
