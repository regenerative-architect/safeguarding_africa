/* Run after editing data/catalog.json; then bump sw.js VERSION and rerun tests. */
const fs=require('node:fs'),path=require('node:path'),root=path.resolve(__dirname,'..');
const data=JSON.parse(fs.readFileSync(path.join(root,'data/catalog.json'),'utf8'));
for(const key of ['sources','claims','strategies','infrastructures','guides'])if(!Array.isArray(data[key]))throw Error('Missing catalogue array: '+key);
fs.writeFileSync(path.join(root,'data/catalog.js'),'globalThis.SG_DATA = '+JSON.stringify(data)+';\n');
console.log('Browser catalogue synchronised. Update the handbook and source docs if content changed; bump sw.js VERSION and run tests before publishing.');
