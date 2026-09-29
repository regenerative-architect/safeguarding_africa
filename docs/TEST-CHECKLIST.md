# Release and field test checklist

See TEST-REPORT.md for what was actually run. This checklist includes future/manual checks and is not itself proof of completion.

## Core and content
- [ ] Parse all scripts; verify every strategy source and infrastructure ID exists.
- [ ] Verify source summaries against originals and conduct local legal/safeguarding review.
- [ ] Check each route, top/side nav, hash deep links, search and empty results.
- [ ] Add/remove strategies; reset gates on scope change; check undo and progress.
- [ ] Save/reload notes, settings, measures and ledger entries.
- [ ] Exercise malformed, oversized, XSS-shaped, future-version and old-schema imports.
- [ ] Create/list/restore backups and erase local state; verify actual persistence.

## Offline and portability
- [ ] Serve under a GitHub Pages-like subpath; verify all assets and manifest.
- [ ] Warm service worker, reload, disconnect and open multiple routes.
- [ ] Upgrade cache version and verify previous core cache cleanup is scoped.
- [ ] Test direct file opening, no-JavaScript handbook and storage-denied modes.
- [ ] Test iOS/Android installation and browser storage eviction.

## Accessibility
- [ ] Desktop and narrow viewport: no horizontal overflow, readable content, touch targets.
- [ ] Keyboard-only: skip link, menu, Escape, dialog focus, collapsibles and tooltips.
- [ ] Screen reader: landmarks, labels, notifications, progress and table reading.
- [ ] Light/dark contrast; reduced motion; 200%/400% zoom and text scaling.
- [ ] Print current route and handbook with tables, URLs and expanded detail.
- [ ] Human-review local-language translations before release.

## Optional integrations
- [ ] Load pinned WebLLM runtime; review model licence and model metadata.
- [ ] Download/execute a small model on a supported GPU; test memory/network failure, unload and cache deletion.
- [ ] Verify generated text cannot alter state, execute HTML or invent trusted sources.
- [ ] Connect local tabs, reject wrong protocols, review incoming snapshots, test duplicates.
- [ ] Test two independent devices online with correct and incorrect secrets, late joins and network loss.
- [ ] Inspect signalling/ICE metadata, dependency licences and CDN supply-chain behaviour.
- [ ] Confirm no notes, measures, task checks or ledger content ever enters snapshots.

## Safeguarding field review
- [ ] Independent child-protection reviewer examines every pathway and stop rule.
- [ ] Local providers confirm service capacity, safety and accessibility before referrals.
- [ ] Child participation design is voluntary and ethically reviewed where needed.
- [ ] Retaliation, shared-device access, confidentiality and data-retention risks reviewed.
- [ ] No interpretation of readiness/XP as a child-risk score or guarantee of efficacy.
