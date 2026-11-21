# v22 · Week Summary muscle maps

Each saved workout in **Week Summary** now has one small front/back diagram for its primary muscle regions. The app combines the areas for the exercises actually scheduled that date, including temporary replacements. Rest and empty days have no diagram. Titles, dates, counts and muscle-group labels remain, with a localized description of specific regions for assistive technology.

The diagrams reuse existing inline artwork, do not make network requests or store new data, and work offline. If the week changes while the summary is open, the rows refresh with keyboard focus retained. A tap on an outdated row refreshes the displayed dates instead of navigating to a day in a different week.

Verification uses synthetic workouts: primary vs. assistant highlights, shared-region deduplication, dated replacement, empty/rest day presentation, keyboard focus and same-day selection, zero external requests/storage writes, and Sunday-to-Monday refresh. Release testing uses mobile Chromium emulation, not a physical device.
