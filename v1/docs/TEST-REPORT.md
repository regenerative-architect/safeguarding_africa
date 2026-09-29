# Actual test report — 2026-09-29

## Passed automated checks

`node tests/core.test.cjs`: **39 tests passed**. Covers unique content IDs; complete strategy fields; citation and infrastructure links; source URL schemes; schema 1/2 migration; schema 3 roundtrip; future/invalid schemas; malformed/oversized imports; invalid roles/IDs; deduplication; text escaping; prototype keys; ledger URL validation; aggregate validation; readiness; reversible XP; snapshot exclusions; protocol rejection; peer field stripping; deterministic guide; JavaScript syntax; relative manifest paths; icons; sample backups.

`node tests/storage.test.cjs`: passed the denied-IndexedDB scenario. Initialisation falls back to memory; save and clear remain usable; persistent backup attempts fail clearly.

## Passed real-browser checks

Executed through the Codex in-app Chromium browser against a local HTTP server, using supported browser developer controls. These results do not mean the included standalone browser harness passed.

1. Loaded with IndexedDB and a controlling service worker.
2. All 16 registered routes rendered headings; side navigation matched active routes.
3. Whole-catalogue search found the birth-registration strategy.
4. Selecting a strategy created its four-step checklist; checking a step produced 10 practice XP.
5. Four readiness acknowledgements changed preparation status to ready for human review.
6. Strategies, notes and acknowledgements survived a document reload.
7. A real IndexedDB internal backup was created and listed.
8. The monitoring form accepted 24/30 and displayed 80.0% descriptively.
9. The deterministic learning guide rendered its stop rule without AI.
10. Core use showed no third-party resource requests before explicit optional-runtime loading.
11. With browser networking set offline, a document reload succeeded; all 36 strategies remained available and the saved plan persisted.
12. At a 390-pixel viewport, home, plan, evidence, collaboration, settings and infrastructure had no horizontal page overflow; the mobile menu opened and closed on navigation.
13. Two same-origin tabs joined a local room. Joining sent no plan snapshot. Explicit sharing delivered one snapshot containing only app/protocol/schema/type/ID/revision/time/strategy IDs; notes were absent. Both disconnected afterward.
14. The actual JSON-file input accepted the schema-1 sample, displayed a schema-3 replacement preview, applied it after confirmation, and created a pre-import backup.
15. The research form stored a sample record as `User-entered / unverified`.
16. The pinned WebLLM runtime loaded and exposed model choices. No model weights were downloaded and no inference was run.
17. The pinned Trystero runtime loaded and exposed `joinRoom`. This did not verify an internet peer connection.
18. Diagnostics reported a WebGPU adapter, limits, approximate device memory, WebRTC and BroadcastChannel. This is not a model-compatibility guarantee.
19. The skip link focused main content; Escape after splash removal did not throw; dark mode, reduced-motion and engagement-disable controls worked.
20. The erase workflow cleared fictional QA data and internal backups. Only a light-theme preference remained for the clean preview.
21. No browser error or warning entries were reported at the end of these checks.

A desktop screenshot at native browser size was visually inspected. Early screenshots during viewport emulation were tiled by the capture surface and discarded. Responsive checks used layout measurements and menu interaction. A complete visual audit of every route was not performed.

## Fixes during review

- Escape tolerates an already-dismissed splash.
- Skip link focuses main without changing routes.
- Deep-linked strategies reset incompatible filters.
- Cache names include worker scope to avoid deleting another deployment's cache.

## Blocked or untested

- Standalone Chrome/Edge harness could not launch an independent browser in this sandbox (permission/startup failure). In-app browser testing was used instead. The harness remains for maintainers to rerun; it is not reported as passed.
- Actual GitHub Pages deployment and project-subpath browser loading were not executed. Relative manifest/asset structure was checked statically; local browser testing used the root path.
- Model download, inference, out-of-memory recovery, GPU variation and offline model caches were not tested.
- Two-device internet Trystero/WebRTC, signalling reliability, NAT traversal, wrong-password handling and online late joins were not tested. No TURN server is configured.
- Multi-tab service-worker upgrades, eviction/private mode, real mobile installation, direct-file behaviour and no-JavaScript browser rendering were not comprehensively tested.
- Screen readers, formal WCAG/contrast audit, 400% zoom, printer/PDF pagination and all-device visual testing remain outstanding.
- No penetration test, dependency audit or hostile-peer stress test was performed.
- No country legal/clinical validation, child-participant field evaluation, provider availability check or independent safeguarding audit was performed.
- Foundry HTML and full earlier chat were unavailable; their contents were not inspected.

Tests support basic functionality, not real-world safety, efficacy, exhaustive coverage or professional suitability. Review cutoff: 2026-09-29.
