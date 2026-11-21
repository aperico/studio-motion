# Train saved-week selector candidate (v34)

Scoped change: temporary week browsing above Train weekdays; actual calendar dates,
retained weekday, Return to today, and read-only non-current weeks. Refresh starts
in the actual current context. Existing recurring, paused and ended behavior stays
in place. No backup integrity changes are included.

Validation on 2026-11-21:

- All `qa/*.cjs` passed (including configuration backup regression unchanged).
- Ten scripted usability profiles: 10/10, zero failing states; human satisfaction
  is not measured by these scripts.
- `qa/train-weeks.cjs`: 320 px PT-BR and 800 px EN; no navigation storage writes,
  actual dates, read-only controls and direct completion handlers, stale weight
  submission, weekday retention, Return to today, refresh default, focus stability,
  fake-clock midnight retention and rollover into a current week, paused and ended fallback,
  real-current banner dates, guarded stale resume and hidden editor events, and neutral
  saved empty/rest-day copy.
- Local HTTP service worker: v34 cache populated, network disabled, reload serves
  the app with the v34 badge and weekday controls.
- `git diff --check` passed.

Reproduce: `PLAYWRIGHT_MODULE=/path/to/playwright node qa/train-weeks.cjs`.
Full suite: `for script in qa/*.cjs; do PLAYWRIGHT_MODULE=/path/to/playwright node "$script" || exit; done`.

Publishing intentionally deferred for independent review. GitHub Pages exact-file
verification remains a release step after the candidate is approved and pushed.
