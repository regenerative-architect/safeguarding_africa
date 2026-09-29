(function(root){
  'use strict';
  const VERSION=3, PROTOCOL=1;
  const GATES=['Local referral checked','Child participation and consent process reviewed','Retaliation risks reviewed','Independent safeguarding reviewer identified'];
  const ROLES=['Caregiver','Educator','NGO practitioner','Youth ally','Legal advocate','Community leader','Policymaker','Journalist','Researcher'];
  const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function fresh(){return {schema:VERSION,revision:0,updated:new Date().toISOString(),role:'Educator',plan:[],gates:[],tasks:{},notes:'',settings:{theme:'system',motion:false,engagement:true},metrics:[],ledger:[]};}
  function assert(c,m){if(!c)throw Error(m);}
  function str(x,n=1000){assert(typeof x==='string'&&x.length<=n,'Invalid or oversized text');return x;}
  function ids(a,allowed,max=100){assert(Array.isArray(a)&&a.length<=max,'Invalid list');assert(a.every(x=>typeof x==='string'&&allowed.includes(x)),'Unknown identifier');return [...new Set(a)];}
  function migrate(raw,catalog){
    assert(raw&&typeof raw==='object'&&!Array.isArray(raw),'Expected an object');
    const x=JSON.parse(JSON.stringify(raw));
    const v=x.schema??1;
    assert(Number.isInteger(v)&&v>=1&&v<=VERSION,'Unsupported schema version; no data changed');
    if(v===1){x.plan=x.plan??x.selected??[];x.settings=x.settings??{};x.schema=2;}
    if(x.schema===2){x.metrics=x.metrics??[];x.ledger=x.ledger??[];x.gates=x.gates??[];x.schema=3;}
    const out=fresh(), valid=catalog.strategies.map(s=>s.id);
    out.plan=ids(x.plan??[],valid,100);
    out.gates=ids(x.gates??[],GATES,4);
    assert(ROLES.includes(x.role??'Educator'),'Unknown role');out.role=x.role??'Educator';
    out.notes=str(x.notes??'',4000);
    out.revision=Number.isSafeInteger(x.revision)&&x.revision>=0?x.revision:0;
    out.updated=typeof x.updated==='string'&&!Number.isNaN(Date.parse(x.updated))?x.updated:out.updated;
    const st=x.settings??{};out.settings={theme:['light','dark','system'].includes(st.theme)?st.theme:'system',motion:st.motion===true,engagement:st.engagement!==false};
    assert(!x.tasks||typeof x.tasks==='object','Invalid tasks');
    for(const s of catalog.strategies)for(let i=0;i<s.steps.length;i++){
      const key=s.id+':'+i;if(x.tasks?.[key]===true)out.tasks[key]=true;
    }
    assert(Array.isArray(x.metrics??[])&&(x.metrics??[]).length<=200,'Too many measures');
    out.metrics=(x.metrics??[]).map(m=>{
      assert(m&&typeof m==='object','Invalid measure');
      assert(['Access','Referral completion','Delivery quality','Unintended barriers'].includes(m.type),'Unknown measure');
      assert(Number.isInteger(m.n)&&Number.isInteger(m.d)&&m.d>=10&&m.d<=1e7&&m.n>=0&&m.n<=m.d,'Invalid aggregate values');
      assert(/^\d{4}-\d{2}$/.test(m.period)&&+m.period.slice(5)>=1&&+m.period.slice(5)<=12,'Invalid period');
      return {type:m.type,n:m.n,d:m.d,period:m.period};
    });
    assert(Array.isArray(x.ledger??[])&&(x.ledger??[]).length<=100,'Too many ledger entries');
    out.ledger=(x.ledger??[]).map(l=>{
      const url=str(l.url,1000);assert(/^https:\/\/[^\s]+$/i.test(url),'Ledger URLs must use HTTPS');
      return {title:str(l.title,160),url,finding:str(l.finding,1200),limit:str(l.limit,1200),design:str(l.design??'Not specified',160),date:str(l.date??'Unknown',40),scope:str(l.scope??'Not specified',160),kind:'User-entered / unverified'};
    });
    return out;
  }
  function parseImport(text,catalog){assert(typeof text==='string'&&text.length<=1000000,'Backup exceeds 1 MB');return migrate(JSON.parse(text),catalog);}
  function progress(state,catalog){const steps=catalog.strategies.filter(x=>state.plan.includes(x.id)).flatMap(x=>x.steps.map((_,i)=>x.id+':'+i));const done=steps.filter(k=>state.tasks[k]).length;return {done,total:steps.length,xp:done*10,readiness:Math.round(state.gates.length/GATES.length*100),canReview:state.plan.length>0&&state.gates.length===GATES.length};}
  function snapshot(state){return {app:'safeguard-africa',protocol:PROTOCOL,schema:VERSION,type:'snapshot',id:globalThis.crypto?.randomUUID?.()??String(Date.now())+Math.random(),revision:state.revision,created:new Date().toISOString(),plan:[...state.plan]};}
  function validateMessage(m,catalog){
    assert(m&&typeof m==='object'&&JSON.stringify(m).length<30000,'Invalid or oversized message');
    assert(m.app==='safeguard-africa'&&m.protocol===PROTOCOL&&m.schema===VERSION,'Incompatible app, protocol or schema');
    assert(['hello','snapshot'].includes(m.type),'Unknown message type');
    if(m.type==='hello')return {app:m.app,protocol:PROTOCOL,schema:VERSION,type:'hello'};
    assert(Number.isSafeInteger(m.revision)&&m.revision>=0,'Invalid revision');
    return {...snapshot({revision:m.revision,plan:[]}),id:str(m.id,100),created:str(m.created,40),plan:ids(m.plan,catalog.strategies.map(x=>x.id),100)};
  }
  function guide(strategy){return `${strategy.title}\n\nEditorial inference — verify locally.\n\nGoal: ${strategy.goal}\n\nBefore starting:\n${strategy.pre.map(x=>'• '+x).join('\n')}\n\nSteps:\n${strategy.steps.map((x,i)=>(i+1)+'. '+x).join('\n')}\n\nStop rule: ${strategy.stop}\n\nWatch for: ${strategy.failure}\n\nMeasure: ${strategy.metric}\n\nSources: ${strategy.refs.join(', ')}. Read their limitations in the evidence ledger.`;}
  const api={VERSION,PROTOCOL,GATES,ROLES,escape,fresh,migrate,parseImport,progress,snapshot,validateMessage,guide};root.SG_CORE=api;
  if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(globalThis);
