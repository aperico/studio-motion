const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const a=require('node:assert/strict'),{pathToFileURL}=require('node:url'),path=require('node:path');
const url=pathToFileURL(path.join(__dirname,'../index.html')).href;
(async()=>{const b=await chromium.launch();try{
 for(const [width,locale] of [[320,'pt-BR'],[390,'en-US']]){
  const pt=locale==='pt-BR',c=await b.newContext({isMobile:true,hasTouch:true,viewport:{width,height:715},locale,offline:true,timezoneId:'America/Sao_Paulo'}),p=await c.newPage(),errors=[],net=[];
  p.on('pageerror',e=>errors.push(e.message));p.on('request',r=>{if(/^https?:/.test(r.url()))net.push(r.url())});
  await p.clock.install({time:new Date('2026-11-23T12:00:00-03:00')});await p.goto(url);
  const results=await p.evaluate(async()=>{
   const book=document.getElementById('exerciseGuide');
   const trigger=document.getElementById('modeSwitch'),results=[];
   for(const e of E){
    openGuide(e.id,trigger);
    const figures=[...book.querySelectorAll('#guideArt figure')];
    const poses=figures.map(f=>({shapes:f.querySelectorAll('svg path,svg line,svg circle,svg rect').length,html:f.querySelector('svg').innerHTML,caption:f.querySelector('figcaption').textContent,label:f.querySelector('svg').getAttribute('aria-label')}));
    const steps=[...book.querySelectorAll('#guideInstructions li')].map(x=>x.textContent);
    results.push({id:e.id,hold:e.hold,poses,steps,html:book.innerHTML.length,caption:book.querySelector('#guideName').textContent,external:!!guideSource(e)||Boolean(inlineFormImages[e.id]),inline:Boolean(inlineFormImages[e.id])});
    await new Promise(done=>{book.addEventListener('close',done,{once:true});book.close()});
   }
   return results;
  });
  a.equal(new Set(results.map(x=>x.id)).size,results.length);
  for(const x of results){
   a(x.caption.length>2&&x.steps.length>=2&&x.steps.every(y=>y.length>15),x.id);
   a.equal(x.poses.length,x.hold?1:2,x.id);
   a(x.poses.every(y=>y.shapes>=4&&y.caption&&y.label.includes(x.caption)&&!/undefined|NaN/.test(y.html)),x.id);
  }
  await p.evaluate(()=>{plan.days[0]=cleanSession({title:'Synthetic guide check',items:[make('bw-deadbug'),make('mob-open'),make('press')]});save();setDay(0);});
  const l=s=>p.locator(s);
  await p.evaluate(()=>{setMode(true);$('libraryPanel').open=true;choose('bw-deadbug');});
  await l('#libraryGuideButton [data-guide=bw-deadbug]').tap();
  a.match(await l('#guideInstructions').textContent(),pt?/perna oposta/:/opposite leg/);
  a.equal(await l('#guideArt figure').count(),2);
  a(await l('#guideArt figure').last().locator('svg path').evaluateAll(xs=>xs.some(x=>x.getAttribute('d')?.includes('Q147 196'))));
  a(!(await l('#guideDose').isVisible()));
  const box=await l('#guideClose').boundingBox();a.equal(box.width,44);a.equal(box.height,44);
  a.equal(await l('#guideClose').getAttribute('aria-label'),pt?'Fechar':'Close');
  a(await l('#exerciseGuide').evaluate(x=>x.scrollWidth<=x.clientWidth));
  a(await l('#guideInlineToggle').isVisible());
  await l('#guideInlineToggle').tap();a.match(await l('#guideInlineStatus').textContent(),pt?/não.*imagem|carregar/i:/couldn’t load/i);
  a.equal(await l('#guideArt figure').count(),2);
  await l('#guideClose').tap();
  a(await l('#libraryGuideButton [data-guide=bw-deadbug]').evaluate(x=>x===document.activeElement));
  await p.evaluate(()=>choose('mob-open'));await l('#libraryGuideButton [data-guide=mob-open]').tap();a.equal(await l('#guideArt svg path[d*="L232 103"]').count(),2);a.match(await l('#guideInstructions').textContent(),pt?/joelhos juntos|mantenha-os juntos/:/keep them together/);
  a(!(await l('#guideDose').isVisible()));
  await l('#guideClose').tap();
  a.deepEqual(net,[]);a.deepEqual(errors,[]);
  console.log('PASS',width,locale,results.length,'pose pairs or hold pose, exercise cue, render a11y; external',results.filter(x=>x.external).length,'inline',results.filter(x=>x.inline).length,'; exact dead bug + open book, close 44px, no external weight, focus restore, offline');
  await c.close();
 }
}finally{await b.close()}})().catch(e=>{console.error(e);process.exitCode=1});
