const assert=require('node:assert/strict');
const { chromium }=require('./runtime.js');
const {pathToFileURL}=require('node:url');
const path=require('node:path');
const BASE=process.env.STUDIO_QA_URL || pathToFileURL(path.resolve(__dirname,'../index.html')).href;
(async()=>{
const browser=await chromium.launch(); let failures=0;
for(const width of [320,360,390])for(const locale of ['pt-BR','en'])for(const textZoom of [1,1.5,2]){
 const p=await browser.newPage({viewport:{width,height:760},locale,isMobile:true,deviceScaleFactor:1,hasTouch:true});
 await p.goto(BASE);
 await p.addStyleTag({content:'html{font-size:'+100*textZoom+'%}body{font-size:1rem}'});
 const broken=async(stage)=>{
  const issues=await p.evaluate(()=>{
   const out=[];
   const check=(el,where)=>{
    const q=el.getBoundingClientRect(), st=getComputedStyle(el);
    if(q.width===0||q.height===0||q.bottom<0 || st.visibility==='hidden')return;
    if(q.right>innerWidth+1||q.left< -1)out.push(where+':edge');
    if(el.matches('select')){
      const c=document.createElement('canvas').getContext('2d');c.font=st.font;
      const selected=[...el.options].map(o=>o.text).sort((a,b)=>c.measureText(b).width-c.measureText(a).width)[0]||'';
      if(c.measureText(selected).width+parseFloat(st.paddingLeft)+parseFloat(st.paddingRight)+14>q.width+2)out.push(where+':option('+selected+' '+Math.ceil(c.measureText(selected).width)+' vs '+Math.floor(q.width)+')');
      return;
    }
    for(const child of el.childNodes){
      if(child.nodeType!==3||!child.textContent.trim())continue;
      const r=new Range;r.selectNodeContents(child);
      if([...r.getClientRects()].some(w=>w.right>q.right+1||w.left<q.left-1))out.push(where+':text');
    }
   };
   for(const el of document.querySelectorAll('button,button span,.brand,.brand small,select,#studioAbout summary,#studioAbout h2,#studioAbout a,.field,.generator-fields fieldset,#weekCards label,#weekCards summary,#weekCards small')){
    if(!el.closest('[hidden]')&&el.getClientRects().length)check(el,el.id||el.textContent.trim().slice(0,38));
   }
   if(document.documentElement.scrollWidth>innerWidth+1)out.push('PAGE:'+document.documentElement.scrollWidth);
   return [...new Set(out)];
  });
  if(issues.length){failures++; console.log(width,locale,textZoom,stage,issues.join(', '));}
 };
 await broken('train');
 await p.locator('#aboutToggle').click();await broken('menu');
 await p.locator('#credits summary').click();await broken('credits');
 await p.locator('#aboutClose').click();
 await p.locator('#weekGenerate').click();await broken('week');
 await p.locator('#weekClose').click();
 await p.locator('#modeSwitch').click();
 await p.locator('#autoOptions summary').click();await broken('generator');
 await p.locator('#trainingGenerate').click();await broken('day');
 await p.close();
}
await browser.close(); console.log(failures+' failing states'); assert.equal(failures,0);
})().catch(e=>{console.error(e);process.exitCode=1;});
