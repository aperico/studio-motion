const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const a=require('node:assert/strict'),{pathToFileURL}=require('node:url'),path=require('node:path');
const url=pathToFileURL(path.join(__dirname,'../index.html')).href;
(async()=>{const b=await chromium.launch();try{
 for(const [width,locale] of [[320,'pt-BR'],[390,'en-US']]){
  const pt=locale==='pt-BR',c=await b.newContext({isMobile:true,hasTouch:true,viewport:{width,height:700},locale,offline:true,timezoneId:'America/Sao_Paulo'}),p=await c.newPage();
  const l=s=>p.locator(s),error=[],network=[];p.on('pageerror',e=>error.push(e.message));p.on('request',r=>{if(/^https?:/.test(r.url()))network.push(r.url())});
  await p.clock.install({time:new Date('2026-11-23T23:57:00-03:00')});p.setDefaultTimeout(3000);await p.goto(url);
  await p.evaluate(()=>{for(const i of [0,1])plan.days[i]=cleanSession({title:'Synthetic sample',items:[{...make('press'),sets:4},{...make('press'),sets:3}]});save();setDay(0)});
  const card=i=>l('#trainList .train-card').nth(i),quick=i=>card(i).locator('[data-complete-set]'),checked=i=>card(i).locator('input:checked').evaluateAll(xs=>xs.map(x=>+x.dataset.set));
  a.equal(await quick(0).textContent(),pt?'Série concluída':'Set completed');
  a((await quick(0).boundingBox()).height>=44);
  await card(0).locator('[data-set="2"]').check();
  await quick(0).tap();a.deepEqual(await checked(0),[1,2]);a.deepEqual(await checked(1),[]);
  a.match(await quick(0).getAttribute('aria-label'),/3/);
  await quick(0).press('Enter');a.deepEqual(await checked(0),[1,2,3]);
  await quick(0).press('Space');a.deepEqual(await checked(0),[1,2,3,4]);
  a.equal(await quick(0).textContent(),pt?'Todas as séries concluídas':'All sets completed');
  a.equal(await quick(0).getAttribute('aria-disabled'),'true');
  a(await quick(0).evaluate(x=>x===document.activeElement));
  await quick(0).dispatchEvent('click');a.deepEqual(await checked(1),[]);
  await card(0).locator('[data-set="2"]').uncheck();a.equal(await quick(0).getAttribute('aria-disabled'),'false');
  await quick(0).tap();a.deepEqual(await checked(0),[1,2,3,4]);
  await card(1).locator('.replace').tap();await l('[data-swap-ex=cable-chest]').tap();
  await quick(1).tap();a.deepEqual(await checked(1),[1]);a.deepEqual(await checked(0),[1,2,3,4]);
  await p.reload();a.deepEqual(await checked(0),[1,2,3,4]);a.deepEqual(await checked(1),[1]);
  a.equal(await card(1).locator('.rig').getAttribute('data-rig'),'cable-chest');
  await p.evaluate(()=>window.staleButton=document.querySelectorAll('[data-complete-set]')[1]);
  await p.clock.fastForward(182000);
  a.equal(await l('#trainList').getAttribute('data-date'),'2026-11-24');a.deepEqual(await checked(0),[]);a.deepEqual(await checked(1),[]);
  await p.evaluate(()=>window.staleButton.click());a.deepEqual(await checked(1),[]);
  await quick(0).tap();a.deepEqual(await checked(0),[1]);
  await l('#days [data-day="0"]').tap();a.deepEqual(await checked(0),[1,2,3,4]);
  a(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));a.deepEqual(network,[]);a.deepEqual(error,[]);
  console.log('PASS',width,locale,'one-tap, gaps, keyboard, done/focus, correction, isolated duplicate/swap, reload, rollover, offline');
  await c.close();
 }
}finally{await b.close()}})().catch(e=>{console.error(e);process.exit(1)});
