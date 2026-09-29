(function(){
 'use strict';
 let db=null,mode='memory',memory=null;const NAME='safeguard-africa-v1';
 function open(){return new Promise((resolve,reject)=>{const r=indexedDB.open(NAME,3);r.onupgradeneeded=()=>{for(const name of ['state','backups'])if(!r.result.objectStoreNames.contains(name))r.result.createObjectStore(name);};r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);r.onblocked=()=>reject(Error('Close older tabs to upgrade storage'));});}
 function tx(store,action){return new Promise((resolve,reject)=>{const t=db.transaction(store,'readwrite');let result;const r=action(t.objectStore(store));r.onsuccess=()=>result=r.result;t.oncomplete=()=>resolve(result);t.onerror=()=>reject(t.error);t.onabort=()=>reject(t.error??Error('Storage transaction aborted'));});}
 async function init(){try{db=await open();db.onversionchange=()=>{db.close();db=null;mode='memory';};mode='IndexedDB';return await tx('state',s=>s.get('current'));}catch(e){mode='memory';return null;}}
 async function save(state){memory=structuredClone(state);if(db)await tx('state',s=>s.put(memory,'current'));}
 async function backup(state){if(!db)throw Error('Persistent backups unavailable; export JSON instead.');const key=new Date().toISOString();await tx('backups',s=>s.put(structuredClone(state),key));const all=await tx('backups',s=>s.getAllKeys());for(const k of all.slice(0,-5))await tx('backups',s=>s.delete(k));return key;}
 async function list(){return db?await tx('backups',s=>s.getAllKeys()):[];}
 async function get(key){return db?await tx('backups',s=>s.get(key)):null;}
 async function clear(){if(db){await tx('state',s=>s.clear());await tx('backups',s=>s.clear());}memory=null;}
 globalThis.SG_STORE={init,save,backup,list,get,clear,mode:()=>mode};
})();
