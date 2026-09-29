/* Increment VERSION for every released asset change. */
const VERSION='1.0.2';
const PREFIX='safeguard-africa-'+encodeURIComponent(self.registration.scope)+'-';
const CACHE=PREFIX+VERSION;
const ASSETS=[
  "./",
  "./index.html",
  "./assets/style.css",
  "./assets/icon.svg",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./data/catalog.js",
  "./data/catalog.json",
  "./data/sample-backup.json",
  "./data/sample-v1.json",
  "./modules/core.js",
  "./modules/storage.js",
  "./modules/routes.js",
  "./modules/optional.js",
  "./modules/app.js",
  "./manifest.webmanifest",
  "./README.md",
  "./LICENSE",
  "./docs/ATTRIBUTIONS.md",
  "./docs/DEPLOYMENT.md",
  "./docs/FEATURE-AUDIT.md",
  "./docs/handbook.html",
  "./docs/PROVENANCE.md",
  "./docs/TEST-CHECKLIST.md",
  "./docs/TEST-REPORT.md",
  "./docs/ZERO-HARM.md"
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==self.location.origin||!u.href.startsWith(self.registration.scope))return;e.respondWith(caches.open(CACHE).then(async c=>{const hit=await c.match(e.request);if(hit)return hit;try{return await fetch(e.request);}catch(err){if(e.request.mode==='navigate')return (await c.match('./index.html'))||Response.error();throw err;}}));});
