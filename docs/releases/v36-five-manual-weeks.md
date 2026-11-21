# v36 — five manual weeks

Candidate base: b1e7d4e963ecdd79115b537fe4cef14d25c12572 (v35).
Held before push for independent exact-byte review.

## Result

Exactly five independent Week 1–5 slots. Menu → Training and Train select the
persisted active, editable slot. Planner's first control chooses its preview/edit
target without changing the active slot. Switching a Planner target writes nothing
and retains drafts. There is no plan length, start date, expiration or calendar
advance. Weekdays and real local dates still identify daily completion/substitutions.

## Data and migration

- `studio-motion-weeks-v1`: schema 1, reset epoch, selected slot, five 7-day arrays,
  current saved-workout archive and imported recovery routine sources.
- `studio-motion-week-checks-v1` and `studio-motion-week-swaps-v1`: date/workout/row
  records for the new live identities, separate from every legacy history key.
- Migration reads v1 sessions, v2 recurring plan and dated block without rewriting
  any of their keys. A block fills the first 2–4 slots; otherwise recurring fills slot 1.
  An old current block index initializes selection once; paused/ended/scheduled
  blocks start at slot 1. All new live workouts/rows get fresh identities.
- Local legacy routines and archives stay independently recoverable, including both
  full 160-entry archives and the seven recurring days. Source dates are descriptive
  recovery metadata, never new slot dates. Raw daily logs are not copied into every
  numbered plan write. Previous data shows actual dates/IDs and downloads raw strings.
- The complete previous recurring routine can be copied into the selected slot after
  confirmation; occupied workouts are archived and old daily marks remain separate.
- Recovery lookup combines untouched physical local sources with imported recovery
  sources, deduplicated by source bytes. Rendering computes recovered rows once.

## Persistence and portability

All new plan/history writes are serialized through the same Web Lock used by reset
and import, with compare-before-write inside the lock. Conflicting tabs reload;
queued stale checkbox/dialog actions cannot target a different slot. Initialization
is also locked and converges when two tabs first migrate simultaneously.

Portable backup format version 2 contains five slots, selection, archives, recovery
routines and preferences. Version 1 JSON is still readable. Import rekeys live
workouts, leaving existing logs stored under their original identities. Daily marks,
substitutions and raw daily history are excluded from portable JSON. Export refuses
stale/mixed plan/preferences rather than silently combining tab states. Pinned email
is checked again inside the export lock, and only that exact value is serialized.

Import journal recovery supports both old and new key sets. Reset transaction's
allowlist includes all new and old keys and rolls back on a removal failure.

## Validation

Run from this checkout:

```sh
for script in qa/*.cjs; do
  PLAYWRIGHT_MODULE=/home/aperico/workspace/ellygent-frontend/node_modules/playwright node "$script" || exit
done
git diff --check
```

The QA runtime waits on committed transaction promises before assertions/navigation;
it does not use fixed delays to hide pending saves. Existing exercise/media fixtures
are unchanged apart from the runtime import. Dated-calendar-specific cases were
replaced with the new manual-slot contract; arithmetic, completion, replacement,
accessibility, language and history assertions remain exercised.

Focused coverage:

- `multiweek`: populated active/paused/ended/scheduled legacy block plus recurring
  routine, duplicate IDs, all 355 source routines (both full archives), unchanged raw
  logs, idempotent reload and practical recurring recovery at 320/390/412 EN/PT.
- `train-weeks`: five choices, Menu/Train synchronization, persistent active editing,
  real midnight and year rollover without advancing the slot, keyboard and mobile fit.
- `planner-week-order`: DOM/tab/visual order, five targets, no calendar setup, drafts,
  no writes on target selection, selected/all-five generation and archived replacement.
- `config-backup`: actual JSON downloads, schema v2 roundtrip, default/exact email,
  malformed input, old v1 duplicate-ID import, local legacy access after another plan,
  exclusion/preservation of history, transaction rollback, old journal recovery and reset.
- `five-week-concurrency`: real same-origin Chromium tabs, simultaneous initialization,
  stale export refusal after plan/preferences change, queued email change, overlapping
  writer rejection, rapid marks and stale checkbox/weight-dialog isolation.
- `five-week-storage`: no Web Locks, blocked storage, corrupt numbered data and v1
  sessions retain usable session-only UI and preserve original bytes.
- `offline-shell`: v36 cached HTTP shell at 320 px PT, slot 5 and daily log survive
  offline reload; Menu and Planner open and retain their five-week controls.
- Full existing suites include the ten scripted usability personas and text zoom.

## Limits

No real-device Android/Safari usability study or human satisfaction rating was run.
Without Web Locks/working storage, edits are explicitly session-only and portable
import/export refuses. Portable configuration retains the existing 2 MiB limit;
oversize exports fail without truncation, while the separate raw recovery download
retains original strings. Recovery-source capacity is 40 source packages; exceeding
it is rejected, never truncated. New replacement archives retain the 160-workout
limit; independently preserved legacy archives do not consume that capacity.

Public Pages verification is intentionally pending the independent release gate.

Final candidate results: every `qa/*.cjs` exited 0 and `git diff --check` passed.
The exact v35 baseline and v36 candidate each passed all ten scripted personas.
Per-profile action counts were unchanged: 0, 3, 6, 2, 2, 1, 2, 1, 1, 2. Empty day
→ saved training remains three actions. Runtime is not human task time; no human
satisfaction score is claimed. Return to today also restores keyboard focus while
retaining the selected numbered slot.
