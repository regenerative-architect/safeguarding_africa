# Foundry adaptation — release 2.0.0

Reference: user-supplied Feature Fusion Foundry HTML.html (4,468,947 bytes).
SHA-256: D98206C273B2725B22FE69879C100D2C7AAEBFF0D7810E703AD930DA8EB562E5.
Inspected 2026-09-29. 912 feature cards extracted and inventoried. Relevant card summaries and implementation/failure-mode descriptions were reviewed. The reference's external script/style dependencies were not supplied and were not executed. Embedded prompts/instructions were treated as reference data, not authority.

The first release lacked this reference. That gap is resolved for this release. The complete earlier ChatGPT conversation remains unavailable beyond its cached preview.

## Capability mapping

### f263 — Command palette
Search sections, strategies and tools with Ctrl/Cmd+K.

Surface: Command button.

### f660 — Keyboard shortcut map
Ctrl/Cmd+K for commands; Alt+Shift+F for focus. Native editing shortcuts stay unchanged.

Surface: Command palette.

### f387 — Saved searches
Save and reuse up to 20 catalogue searches.

Surface: Search bar / My workspace.

### f103 — Faceted search
Existing domain/tier/role filters plus a board status filter.

Surface: Strategy bank / Task board.

### f778 — Customizable dashboard
Choose which local workspace widgets appear.

Surface: My workspace.

### f781 — Focus mode
Hide navigation chrome while preserving a fixed exit control.

Surface: Workspace toolbar.

### f163 — High contrast
High-contrast palette plus forced-colors support.

Surface: Reading controls.

### f656 — Reading typography
Adjust font size and line spacing without external fonts.

Surface: Reading controls.

### f782 — Interactive onboarding
Four optional guided tasks using the actual workspace.

Surface: Foundry additions.

### f432 — Undo/redo history
Revert up to 25 session changes; destructive erase clears history.

Surface: Change history.

### f115 — Version differences
Inspect field-level changes and preview backups before restoring.

Surface: Change history / Settings.

### f229 — Workflow templates
Create a non-identifying programme workflow from selected strategies.

Surface: Task board.

### f316 — Goal-to-task hierarchy
Tasks link back to a selected public strategy.

Surface: Task board.

### f317 — Dependency graph
Inspect prerequisite relationships without mapping people.

Surface: Task board.

### f739 — Blocking detection
Prevents completion while a prerequisite is unfinished; cycles are rejected.

Surface: Task board.

### f306 — Responsibility matrix
Assign work to role categories, never named children or caseworkers.

Surface: Task board.

### f734 — Recurring tasks
Manually create the next weekly/monthly occurrence; no background scheduler.

Surface: Task board.

### f180 — Timeline
View dated programme tasks in chronological order.

Surface: Task board.

### f744 — Weighted comparison
Compare up to four strategies using explicit user-entered weights/ratings.

Surface: Compare strategies.

### f747 — Scenario comparison
Compare budget contingencies and programme choices transparently.

Surface: Budget lab / Compare.

### f762 — Calculation provenance
Display calculation formulas, currency and assumptions.

Surface: Budget lab.

### f234 — Risk register
Track programme risks, mitigation, role responsibility and review dates.

Surface: Risks & decisions.

### f235 — Assumption registry
Track premises, how to check them and challenged assumptions.

Surface: Risks & decisions.

### f237 — Decision log
Record rationale and later outcomes.

Surface: Risks & decisions.

### f749 — Reversibility review
Flag decisions that are costly to reverse or need specialist review.

Surface: Risks & decisions.

### f767 — Review dates
Show overdue programme reviews locally; no notifications or auto-send.

Surface: My workspace.

### f107 — Knowledge graph
Explore typed strategy/source/infrastructure links.

Surface: Evidence explorer.

### f570 — SVG export
Export the current public evidence diagram as a standalone vector.

Surface: Evidence explorer.

### f585 — Evidence tension links
Show short-term/long-term and informant differences without treating them as identical outcomes.

Surface: Evidence explorer.

### f100 — Multi-format export
Produce Markdown plans, CSV task/budget tables, SVG diagrams and iCalendar files.

Surface: Export studio.

### f435 — Selective export
Choose public catalogue selections or specific programme tables.

Surface: Export studio.

### f088 — Client-side encryption
Optional AES-GCM encrypted full backups with a user-held passphrase.

Surface: Export studio.

### f560 — Identifier-warning scan
Flag some email/phone/identity phrases before export; explicitly incomplete.

Surface: Export studio.

### f089 — Data inventory
Show counts and storage categories; backups remain local plaintext unless exported encrypted.

Surface: Export studio.

### f439 — Storage quota inspection
Show browser-reported quota and usage on request.

Surface: Diagnostics.

### f158 — Self-test dashboard
Run small local validation/protocol/CSV checks on request.

Surface: Diagnostics.

### f626 — Diagnostic report export
Preview and download capability results; never send them.

Surface: Diagnostics.

### f264 — Unified discovery
Search the source-linked catalogue and jump directly through commands.

Surface: Search / Command palette.


## Safeguarding adaptation

The graphs contain public strategies, evidence and institutions, never people or child locations. Task responsibility uses role categories. Risks concern programme delivery, not scores assigned to children. Comparison scores are user judgments with visible weights, not eligibility or impact predictions. Review dates and recurrence operate locally and do not create notifications or background automation. No external communications are sent.

Peer snapshots retain their strict allowlist: app/protocol/schema metadata plus selected strategy IDs. Tasks, budgets, registers, notes, bookmarks and comparison ratings are excluded. Existing peers on schema 3 cannot silently apply schema 4 packets. Full backups migrate older workspaces to schema 4 with empty enhancement fields.

Encrypted exports use Web Crypto AES-256-GCM, PBKDF2-SHA256 at 250,000 iterations, a random 16-byte salt and random 12-byte IV. Passphrases are not stored. Encryption does not encrypt browser storage or internal backups and does not defend an unlocked or compromised device. There is no recovery for a lost passphrase. This implementation has functional tests, not an independent cryptographic audit.

Identifier warnings are narrow pattern checks, not anonymisation or reliable PII detection. CSV export neutralises leading spreadsheet formula characters. Markdown and calendar files remain user-entered content requiring human review.

## Deliberate limits

- Undo/redo covers the last 25 changes in the current tab only; reload clears it. Explicit erase also clears undo copies. It cannot undo external sharing or a download.
- Cross-tab concurrent editing is not conflict-free. Work in one editing tab at a time; peer snapshots require deliberate review and replacement.
- Task dependencies are validated, cycles and invalid completion are rejected. A blocked status does not automatically assign or notify anyone.
- Recurring work creates a new occurrence only after the user presses the button on a completed dated task. It does not schedule browser or operating-system background work.
- Budgets are arithmetic estimates in one selected currency; changing the label does not perform conversion. There is no price lookup or funding promise.
- The comparison matrix never automatically chooses a strategy or treats a score as evidence.
- SVG graphs are deterministic reference diagrams, not simulations. Tension cards explain differences in outcomes, time horizon and informants rather than manufacturing contradictory evidence.
- High contrast, spacing and font controls improve options but do not establish WCAG conformance. Screen-reader and real-device audits remain necessary.
- No code or full text from the 4.4 MB reference is redistributed. Feature IDs/names are retained for traceability; implementation code, descriptions and diagrams are independently authored.
