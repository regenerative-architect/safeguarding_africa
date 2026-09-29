(function(){
 'use strict';
 const C=SG_CORE,D=SG_DATA;let room=null,channel=null,send=null,engine=null,webllm=null,peerRuntime=null,models=[],receiveFn=null,statusFn=null,kind='disconnected';const seen=new Set();
 function note(t){statusFn?.(t);}
 function receive(m,peer){try{const v=C.validateMessage(m,D);if(v.type==='hello'){note('Compatible participant connected. Share a reviewed snapshot to help a late joiner.');return;}if(seen.has(v.id))return;seen.add(v.id);if(seen.size>200)seen.delete(seen.values().next().value);receiveFn?.(v,peer);}catch(e){note('Message rejected: '+e.message);}}
 function hello(){return {app:'safeguard-africa',protocol:C.PROTOCOL,schema:C.VERSION,type:'hello'};}
 function leave(){room?.leave();channel?.close();room=null;channel=null;send=null;kind='disconnected';note('Disconnected. No plan is shared automatically.');}
 async function join(mode,key,password,onReceive,onStatus){leave();receiveFn=onReceive;statusFn=onStatus;
  if(!/^[a-zA-Z0-9_-]{16,80}$/.test(key))throw Error('Use a random room code of 16–80 letters, digits, hyphens or underscores.');
  if(mode==='local'){
   if(!('BroadcastChannel'in globalThis))throw Error('Local-tab communication unavailable. Use a reviewed JSON export.');
   channel=new BroadcastChannel('sg-public-plan-'+key);channel.onmessage=e=>receive(e.data,'local tab');send=m=>channel.postMessage(m);kind='local';send(hello());note('Local tabs joined. Only tabs on this browser origin can connect. Share the snapshot explicitly.');
  }else{
   if(password.length<16)throw Error('Use a room password of at least 16 characters.');
   if(!isSecureContext||!navigator.onLine)throw Error('Online collaboration needs a secure context and a connection.');
   note('Loading optional Trystero from esm.sh; connecting to public signalling services…');
   const lib=await loadPeerRuntime();
   room=lib.joinRoom({appId:'safeguard-africa-public-plans-v1',password},key);
   const action=room.makeAction('sgpacket');
   // Support the pinned tuple API; tolerate the newer action-object API only when present.
   if(Array.isArray(action)){send=m=>action[0](m);action[1](receive);room.onPeerJoin(()=>{send(hello());note('Peer joined; send a reviewed snapshot for late-join synchronisation.');});}
   else {send=m=>action.send(m);action.onMessage=receive;room.onPeerJoin=()=>{send(hello());note('Peer joined; share a reviewed snapshot.');};}
   kind='online';note('Online room opened. Connectivity is not guaranteed; peers may see IP metadata. Share only public catalogue choices.');
  }
 }
 async function loadPeerRuntime(){if(!peerRuntime)peerRuntime=await import('https://esm.sh/trystero@0.22.0/nostr');if(typeof peerRuntime.joinRoom!=='function')throw Error('Peer runtime API unavailable');return peerRuntime;}
 async function share(snap){if(!send)throw Error('Join a room first');C.validateMessage(snap,D);await send(snap);note('Reviewed catalogue snapshot sent. Notes and local records were excluded.');}
 async function diagnostics(){let gpu=false,limits=null,error=null;try{const a=await navigator.gpu?.requestAdapter();gpu=!!a;if(a)limits={maxBufferSize:a.limits.maxBufferSize,maxStorageBufferBindingSize:a.limits.maxStorageBufferBindingSize};}catch(e){error=e.message;}return {secureContext:isSecureContext,online:navigator.onLine,storage:SG_STORE.mode(),serviceWorker:'serviceWorker'in navigator,controlled:!!navigator.serviceWorker?.controller,webGPUAPI:!!navigator.gpu,adapter:gpu,limits,deviceMemoryGB:navigator.deviceMemory??'not exposed',hardwareThreads:navigator.hardwareConcurrency??'not exposed',broadcastChannel:'BroadcastChannel'in globalThis,webRTC:'RTCPeerConnection'in globalThis,webLLM:engine?'model loaded':webllm?'runtime loaded; no model':'not loaded',collaboration:kind,error};}
 async function loadRuntime(){if(!navigator.gpu||!isSecureContext)throw Error('WebGPU unavailable; use the deterministic guide.');webllm=await import('https://esm.sh/@mlc-ai/web-llm@0.2.79');models=webllm.prebuiltAppConfig.model_list.filter(m=>/Qwen2.5-(0.5B|1.5B)-Instruct/.test(m.model_id)&&/q4f16/.test(m.model_id)).slice(0,6);if(!models.length)models=webllm.prebuiltAppConfig.model_list.filter(m=>m.vram_required_MB&&m.vram_required_MB<1800).slice(0,5);return models;}
 async function loadModel(id,progress){if(!webllm)throw Error('Load the runtime first');if(!models.some(x=>x.model_id===id))throw Error('Choose a listed model');if(engine)await engine.unload();engine=await webllm.CreateMLCEngine(id,{initProgressCallback:p=>progress(p.text)});return true;}
 async function explain(s){if(!engine)throw Error('No model loaded. Use the deterministic guide.');const result=await engine.chat.completions.create({messages:[{role:'system',content:'You explain public programme-planning material. Do not provide individual medical/legal advice, identify people, recommend coercion, surveillance, confrontation or investigation. Do not invent evidence. Preserve stop rules and cite only the supplied source IDs. Say that the output is an unverified learning draft.'},{role:'user',content:'Explain this public strategy in plain language, in at most 250 words. No personal case is supplied.\n'+C.guide(s)}],temperature:0,max_tokens:500});return result.choices[0].message.content;}
 async function unload(){if(engine)await engine.unload();engine=null;}
 globalThis.SG_OPTIONAL={join,leave,share,diagnostics,loadRuntime,loadPeerRuntime,loadModel,explain,unload,status:()=>kind};
})();
