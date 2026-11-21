# v30 · Edit sets, reps and weight on the exercise card

Tap **Edit sets & reps** on the exercise card to adjust its planned dose, or tap the load for quick weight-only editing. A hold exercise offers duration instead of repetitions. To retain a generated rep range, leave the repetitions field blank. You cannot reduce the set count below the highest completed set logged for that occurrence. Saved exercise identity and checkmarks do not change.

The load editor has optional kg/lb, plus and minus, and a numeric field for an exact entry. Steps are 0.5 kg or 1 lb. The unit follows you throughout the app and is independent of its language. Changing the display unit or opening and saving without edits does not convert the stored load back and forth. Weights stay stored in kilograms. The usual scope still applies: recurring workout, dated program row, or dated replacement.

Auto Plan Week now briefly points to the 2–4 week choices when it is in recurring single-week mode. Scheduling rules are unchanged.

Regression: `node qa/dose-editor.cjs` with Playwright Chromium. Synthetic fixtures cover exact unit roundtrips, zero/empty and upper limits, step controls, the soft-keyboard viewport, protected sets including storage updates, holds, and dated workout isolation. No user workouts were edited during release testing.
