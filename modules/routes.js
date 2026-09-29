globalThis.SG_ROUTES=[
 {id:'home',label:'Start here',group:'Explore',hint:'Choose a role and a safe next step'},
 {id:'safety',label:'Safety first',group:'Explore',hint:'Decision pathway and hard boundaries'},
 {id:'strategies',label:'Strategy bank',group:'Explore',hint:'36 practical strategies'},
 {id:'plan',label:'My action plan',group:'Act',hint:'Prepare, review and track the work'},
 {id:'infrastructure',label:'Find infrastructure',group:'Act',hint:'Published networks and local checks'},
 {id:'pathways',label:'Roles & tiers',group:'Act',hint:'What fits your role and resources'},
 {id:'maps',label:'Timescales & cascades',group:'Understand',hint:'Mechanisms, dependencies and limits'},
 {id:'evidence',label:'Evidence matrix',group:'Understand',hint:'Claims, studies and limitations'},
 {id:'research',label:'Research ledger',group:'Understand',hint:'Provenance and your review notes'},
 {id:'monitor',label:'Monitoring',group:'Learn',hint:'Safe aggregate measures'},
 {id:'guide',label:'Practical guides',group:'Learn',hint:'Plain-language advanced methods'},
 {id:'assistant',label:'Learning assistant',group:'Tools',hint:'Deterministic guide and optional local AI'},
 {id:'collaborate',label:'Collaborate',group:'Tools',hint:'Explicit, limited plan sharing'},
 {id:'settings',label:'Settings & backups',group:'Tools',hint:'Appearance, portability and recovery'},
 {id:'diagnostics',label:'Diagnostics',group:'Tools',hint:'Offline, storage, GPU and feature checks'},
 {id:'about',label:'Scope & documentation',group:'Tools',hint:'Research cutoff, limitations and licences'}
];

SG_ROUTES.push(...[{"id":"dashboard","label":"My workspace","group":"Plan","hint":"Your priorities and review dates"},{"id":"board","label":"Task board","group":"Plan","hint":"Tasks, dependencies and responsibilities"},{"id":"compare","label":"Compare strategies","group":"Plan","hint":"Transparent weighted comparison"},{"id":"graph","label":"Evidence explorer","group":"Understand","hint":"Strategy, source and infrastructure relationships"},{"id":"registers","label":"Risks & decisions","group":"Plan","hint":"Assumptions, mitigations and review dates"},{"id":"budget","label":"Budget lab","group":"Plan","hint":"Costs, contingencies and scenarios"},{"id":"portability","label":"Export studio","group":"Tools","hint":"Selective formats and encrypted backups"},{"id":"history","label":"Change history","group":"Tools","hint":"Session undo, redo and differences"},{"id":"foundry","label":"Foundry additions","group":"Tools","hint":"Capability provenance and guided practice"}]);

SG_ROUTES.sort((a,b)=>["Explore","Plan","Act","Understand","Learn","Tools"].indexOf(a.group)-["Explore","Plan","Act","Understand","Learn","Tools"].indexOf(b.group));
