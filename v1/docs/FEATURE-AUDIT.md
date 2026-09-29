# Feature coverage and Foundry reference gap

The supplied /mnt/data/Feature Fusion Foundry HTML.html could not be located. The synced sources directory was empty. This is a specification-to-implementation matrix, not an audit of that missing file. Reattach it for a later evidence-based adaptation and licence review.

| Requested capability | Implementation | Boundary |
|---|---|---|
| Modular HTML ZIP / GitHub Pages | Static shell, local scripts/data/assets/docs, hash routes, .nojekyll | Not deployed in this task |
| Shared top and side navigation | modules/routes.js feeds both | Top uses a curated subset of the same registry |
| Splash fail-safe | CSS dismissal, timer, click and no-script bypass | No network dependency |
| Search, collapsibles, tooltips, print | Whole catalogue search, native details, keyboard tooltip, print CSS/handbook | English-only interface |
| Responsive/mobile, themes, motion | Mobile drawer, light/dark/system, reduced motion | Formal assistive-technology audit not performed |
| Persistence and portability | IndexedDB, JSON validation, migrations, five snapshots | Plaintext; not case management |
| Optional WebLLM | Explicit runtime and model download, hardware check, fixed learning prompts | Real model execution not verified here |
| Deterministic fallback | Same source-linked strategy guide without AI | Always available with core scripts |
| Trystero/WebRTC | Pinned optional Nostr adapter, explicit join/share | Two-device internet negotiation untested |
| Offline/local collaboration | BroadcastChannel; reviewed JSON exchange | Local tabs share one origin; no LAN discovery |
| Protocol / late joins | Version checks, IDs, revision metadata, explicit snapshots | Manual send to late joiners; no auto-send or CRDT |
| Evidence / provenance | Source registry, claims matrix, reverse strategy links | Curated review, not exhaustive systematic review |
| Execution and pathways | Preconditions, steps, failure/stop rules, roles, tiers | Human authorisation and professional review external |
| Maps | Timescale and interactive causal-chain selector | Hypotheses, not predictive simulation or geographic tracking |
| Monitoring | Local aggregate calculator and balancing measures | No causal inference; privacy requires human review |
| Research ledger | Curated sources plus user-added unverified notes | No automatic web crawling or source verification |
| Infrastructure | 26 cross-domain institutional references | Published directories, not live service availability |
| Engagement | Opt-out XP and constellation tied to checked steps | No leaderboard, disclosure rewards or validated readiness scale |
| Safeguarding | Fixed constraints, anti-retaliation, trauma-informed guidance | Cannot guarantee zero harm or prevent all misuse of notes |
| Docs / licensing / sample data | README, deployment, source policy, MIT/CC attribution, sample JSON, handbook | Third-party source/model rights remain separate |

Feature choices prioritise safe execution and clarity. No unnecessary game mechanics, tracking or sensitive collaboration features were added merely for engagement.
