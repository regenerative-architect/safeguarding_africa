# Deployment and operation

## GitHub Pages

1. Create a repository and upload the contents of this extracted folder with index.html at the chosen publishing root. Preserve .nojekyll.
2. In repository Settings → Pages, select Deploy from a branch, then the branch and root (or /docs if you deliberately moved the complete app there).
3. Wait for GitHub's published HTTPS URL. No server functions, secrets, build workflow or package installation are required.
4. Open the URL, visit Diagnostics and check the core cache. Reload, disconnect from the network and verify another route plus a stored plan.
5. Use the browser installation menu if supported. Installation is a browser capability, not guaranteed on every device.

The app uses relative assets, a relative service-worker scope and hash routes, so it supports https://owner.github.io/repository/ without rewrite rules. Do not publish only index.html: assets, modules, data and docs are required.

## Local preview

Run node serve.cjs from the extracted folder. The server binds only to 127.0.0.1:8765. Use http://localhost:8765 or http://127.0.0.1:8765 consistently; they are separate storage origins. Core file:// reading works, but PWA installation does not.

## Offline boundary

Core files, the printable handbook and documentation are pre-cached atomically during service-worker installation. External sources, optional CDN code and model files are not part of the core cache. Model runtimes manage their own caches; no offline AI guarantee is made. The first successful secure online load is necessary for PWA caching.

## Updates

Change the version in sw.js whenever any cached asset changes. Cache installation must succeed before activation. Existing tabs continue using the old worker until closed. The new worker deletes only caches with this app's scoped cache prefix. Hash routes do not cause network navigation. Preserve schemas or add tested migrations in core.js. Export data before major updates.

## Optional online services

WebLLM runtime: esm.sh/@mlc-ai/web-llm@0.2.79. Trystero: esm.sh/trystero@0.22.0/nostr. Versions are pinned at top level; transitive CDN dependencies remain an external supply-chain dependency. Audit and self-host the dependency graph for controlled deployments. Check upstream licences and model terms before enabling AI in an organisation. No keys are included.

Trystero uses public Nostr signalling and WebRTC ICE discovery. No application TURN service is configured; restrictive networks may prevent connections. A shared room password does not establish identity. Only public catalogue choices are shareable. Local mode uses BroadcastChannel within one browser origin and requires no internet.

## Data, hosting and security

GitHub and optional external providers can retain normal server/network logs. “No analytics” means the application contains no telemetry or tracking code; it does not control host logs. The app requests no geolocation, camera, microphone, notification or contact permissions.

IndexedDB, JSON exports and internal backups are plaintext. Do not store case data. Device compromise and other scripts on the same origin are outside this app's protection. Prefer a dedicated origin, reviewed content, trusted devices and local organisational safeguarding controls. Do not publish user backups. GitHub Pages is public hosting and not a confidential case system.

Review any content-security policy for the chosen deployment. Optional GPU runtime, WebAssembly, CDN imports and WebRTC require appropriate policy allowances; blindly adding a restrictive policy can disable optional features. No tested CSP configuration is claimed in this release.
