# Safeguard Africa — Practice & Evidence

A static, modular, GitHub Pages-ready PWA for non-identifying programme planning to safeguard children through lawful, nonviolent, rights-based approaches.

## Start

1. Extract the ZIP.
2. For quick reading, open index.html or docs/handbook.html. Direct file opening does not support a service worker, and storage behaviour varies.
3. For the full app, serve this folder over HTTPS or localhost. With Node installed, run `node serve.cjs`, then open http://localhost:8765.
4. Start with Safety first, select strategies, review prerequisites and record a small programme plan.
5. Export a JSON backup before relying on browser storage. Do not enter personal case information.

No build, account, backend, API key, package installation or analytics is required for the core app. No external fonts or images are loaded. Root and project-subdirectory hosting are supported through relative asset paths and hash routes.

## Included

- 36 strategies; 27 sources; 25 traceable evidence claims; 26 infrastructure references; 26 guides.
- Shared route registry, top and side navigation, searchable catalogue, collapsibles, tooltips, mobile drawer, print and accessible settings.
- Local IndexedDB, validated JSON import/export, schema 1→2→3 migrations, five internal backups, storage-failure notices.
- Safety pathway, readiness acknowledgements, role pathways, implementation tiers, timescale/cascade maps, aggregate monitoring and research notes.
- Optional progress XP and constellation based only on self-reported selected steps; no leaderboards or rewards for disclosure.
- Optional WebLLM and Trystero/WebRTC loaded only after explicit user actions. Deterministic guidance and local tabs remain available.

## Important scope limits

The requested Feature Fusion Foundry HTML.html was not attached in the accessible workspace. The /mnt/data path did not exist here. The complete earlier chat was not available through the runtime; only the cached preview was supplied. No inspection or adaptation of that file is claimed. The detailed user specification drove this build. A feature mapping and untested areas are documented.

This is a broad curated resource, not an exhaustive systematic review, a live referral directory, a professional legal/clinical service, or a case-management platform. Evidence from specific countries and settings is not generalised into an Africa-wide guarantee. Research review cutoff: 2026-09-29.

## Files

- index.html: application shell
- assets/: styles and original icons
- data/catalog.json and catalog.js: inspectable source-linked content
- modules/core.js: validation, migration, progress and protocol rules
- modules/storage.js: IndexedDB and internal snapshots
- modules/routes.js: shared navigation registry
- modules/app.js: application views and actions
- modules/optional.js: explicit network opt-ins
- sw.js and manifest.webmanifest: core offline caching and installation metadata
- docs/: deployment, safeguarding, provenance, tests, feature audit and printable handbook
- tests/: Node tests and dependency-free Chromium browser test harness

Run `node tests/core.test.cjs` and see docs/TEST-REPORT.md for checks actually performed. The browser test uses an installed Chrome/Edge executable and a temporary profile; see its source for environment options. Do not publish test profiles or any personal backup files.

After editing data/catalog.json, run `node tools/sync-catalog.cjs` to regenerate the browser data script. Update the printable handbook and related documentation to match, increment the cache version in sw.js, and rerun tests. Do not treat generated sample files as real programme records.
