# v35 Planner order and Menu candidate

Based on remote main d7e1164c5987a26f05c49fedbdb5638b488d582d.

Multiweek Planner: Week is the first planning control, full width, above date/status
and goal. Duration and start remain discoverable below goal. Single-week mode has
no redundant week selector. Generation actions precede cards; Save follows cards.
Train week navigation is unchanged.

Menu: grouped Training, Preferences, Local data and About; a single language control,
a single Metric/Imperial control, and optional email editor live in Preferences.
The weight dialog uses the chosen unit. Email status is separate from backup status.
No schema change. Export consent names an exact email and resets/refuses on a
changed saved value; serialization uses the checked value without rereading it.
General backup freshness and media are outside this change.

Validation commands (set PLAYWRIGHT_MODULE to an installed Playwright package):

`for script in qa/*.cjs; do PLAYWRIGHT_MODULE=/path/to/playwright node "$script" || exit; done`

Focused suites: `qa/planner-week-order.cjs` checks 320/800 px EN/PT, DOM/visual/tab
order, width, single-week setup, custom start, draft retention, selected/all generation,
and no writes on selection. Existing multiweek tests cover saved/protected programs.
`qa/menu-preferences.cjs` checks 320 px EN/PT groups, unique preferences, keyboard,
language context, persistence, real load unit effect, local email save/clear, exact
opt-in, changed storage and substituted read, plus updates notice/permalink focus.
Existing dose unit-conversion tests call the unit handler programmatically while
editing to retain arithmetic/draft coverage; actual menu interactions are tested in
the new suite. Existing backup test now edits email in Preferences before export.

The ten scripted usability personas are measured by `qa/mobile-smoke.cjs`; this
is scripted task coverage, not human satisfaction data. Candidate is held before
push for independent review; public Pages deployment remains a later release gate.

Results: all `qa/*.cjs` passed; ten scripted personas 10/10 with zero failing states;
`git diff --check` passed. Local HTTP v35 service-worker cache populated, then
network disabled: reload, Menu and Planner opened successfully at 320 px PT-BR.
