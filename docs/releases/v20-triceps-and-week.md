# v20 · Triceps and one recovery day

The exercise library can filter the six direct triceps movements. The daily planner can generate a randomized, two-movement **Triceps / Tríceps** session when the selected equipment supports it. **Chest & triceps** remains available. None of these previews changes the saved workout or selects a load.

A generated week now has lighter strength on Saturday, with no more than two sets per movement, and a single recovery day on Sunday, with three gentle movements and no gym equipment. Existing weekend workouts and checked sets are not overwritten unless the workout is explicitly replaced.

Chromium mobile emulation passed at 320 px in Brazilian Portuguese and 390 px in English: six-item filter, manual addition, distinct successive triceps exercise sets, useful machine-only empty state, protected Sunday, retained checkmark when saving other days, sole Sunday recovery and Saturday caps across all three goals, and in-card exercise tips retained. The repo’s ten mobile scenarios and its enlarged-text checks also passed.

The mobile header keeps the logo, unsplit version and Menu on the first row, with planning buttons aligned on the next row. The update notice sits inside Menu, with a small unread indicator until dismissed. Exercise numbers are inside each workout card; the ordered list still preserves its semantics.

Header geometry and keyboard focus passed in 48 measured states, covering 320–430 px, 100–200% text, both languages and both view modes. Touch scenarios confirmed notice dismissal and persistence and eight internal card numbers. Repeating generation 125 times per language did not repeat the immediately visible triceps combination when another eligible combination existed.
