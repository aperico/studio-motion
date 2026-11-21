# v23 · Day overview, forearms and trapezius

Open a training day to see a compact card with its primary muscle map, muscle groups, exercise count and planned sets. The card uses the exercises actually shown that date, including temporary replacements, and is hidden on empty or rest days. It complements the existing completion tracker without adding a timer. The weekly overview uses the same calculations for the map and group labels.

In the exercise library, filter **Forearms / Antebraços** or **Trapezius / Trapézio** to find direct exercises. Supported dumbbell wrist curls (palm up), supported wrist extensions (palm down) and the standing barbell shrug have new original offline diagrams. Existing barbell wrist curls, cable reverse curls, wrist rollers and dumbbell shrugs retain their saved identifiers. These categories do not include other movements only because they use those muscles for support.

The daily planner offers optional accessory focuses for one or two forearm exercises or one shrug. It respects equipment choices, leaves loads blank, and does not add these options to existing/default plans. Preview is read-only until Save.

Technique references consulted for the original diagrams: [Kent Community Health NHS: supported wrist movements](https://www.kentcht.nhs.uk/leaflet/wrist-strength/), [ACE: barbell shrug](https://www.acefitness.org/resources/everyone/exercise-library/72/shrug/). No third-party anatomy or exercise media were copied or bundled.

Mobile Chromium tests used synthetic workouts at 320/390/412 CSS px and checked both languages, gear constraints, exclusions, reduced-motion poses, dated map and set totals, rest/empty days, no requests, and read-only previews. Re-run with `node qa/day-overview-accessories.cjs` and Playwright Chromium. The ten existing mobile scenarios and all 108 text-fit checks also passed.
