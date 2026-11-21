# v25 · See what each week proposal trains

**Auto Plan Week** now shows one small front/back map beside each proposed workout. It highlights the primary areas of the exact proposed exercises. Proposals with no qualifying exercises show no map; Sunday recovery has a map when movements are actually proposed. Regenerating recalculates each map from the new exercise list.

Expand **Exercises** on any proposal to see a static, original movement thumbnail beside each name and prescription. Thumbnails draw on demand using the app's existing inline SVG and work offline with no extra requests or animation. They are decorative for screen readers; exercise names and doses are still text, and each body map has a localized accessible description.

The map previews a draft even on an already occupied day. Nothing is applied until Save, and only selected days are saved. Existing protection and confirmation for replacing workouts remain unchanged.

Regression: `node qa/week-planner-maps.cjs` with Playwright Chromium. Set `STUDIO_QA_URL` to a loopback-served checkout to include the installed offline app check; with no URL it exercises the downloaded HTML file. Fixtures are synthetic, not user workout data.
