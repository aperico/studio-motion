// UI actions now commit through Web Locks. Await the app's transaction promises
// before the next assertion/navigation, rather than relying on arbitrary delays.
const real=require(process.env.PLAYWRIGHT_MODULE||'playwright');
function instrument(page){
 const evaluate=page.evaluate.bind(page);
 const flush=async()=>{try{await page.waitForFunction(()=> (typeof resetBusy==='undefined'||!resetBusy)&&(typeof configBusy==='undefined'||!configBusy));await evaluate(async()=>{if(typeof slotsReady!=='undefined')await slotsReady;if(typeof numberedIdle!=='undefined')await numberedIdle;if(typeof numberedWriteTail!=='undefined')await numberedWriteTail.catch(()=>{});if(typeof numberedIdle!=='undefined')await numberedIdle;});}catch(error){if(!/Execution context was destroyed|Cannot find context|Target.*closed/.test(error.message))throw error;}};
 const actions=new Set(['click','tap','fill','selectOption','check','uncheck','press','type']);
 const wrap=locator=>new Proxy(locator,{get(target,key){const value=target[key];if(typeof value!=='function')return value;return (...args)=>{if(actions.has(key))return (async()=>{const result=await value.apply(target,args);await flush();return result;})();const result=value.apply(target,args);return result&&typeof result.locator==='function'&&typeof result.click==='function'?wrap(result):result;};}});
 const locate=page.locator.bind(page);page.locator=(...args)=>wrap(locate(...args));
 for(const name of ['goto','reload']){const original=page[name].bind(page);page[name]=async(...args)=>{const result=await original(...args);await flush();return result;};}
 page.evaluate=async(...args)=>{const result=await evaluate(...args);await flush();return result;};
 const press=page.keyboard.press.bind(page.keyboard);page.keyboard.press=async(...args)=>{const result=await press(...args);await flush();return result;};
 return page;
}
const chromium={...real.chromium,launch:async(...args)=>{const browser=await real.chromium.launch(...args);const newPage=browser.newPage.bind(browser);browser.newPage=async(...args)=>instrument(await newPage(...args));const newContext=browser.newContext.bind(browser);browser.newContext=async(...args)=>{const context=await newContext(...args),newPage=context.newPage.bind(context);context.newPage=async(...args)=>instrument(await newPage(...args));return context;};return browser;}};
module.exports={...real,chromium};
