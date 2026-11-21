# Studio Motion usability release check

Run this check against the current release and the exact candidate. Use isolated, synthetic browser profiles, never a real person's saved workout. This measures product tasks, not how many people would enjoy or succeed with the app.

## Ten simulated profiles and tasks

| Profile | Task and pass condition |
| --- | --- |
| 1. First visit, no gym-app experience | Open Today. Correct weekday and clear choices to start manually or preview a plan. |
| 2. First auto-plan, little time | Generate and save one day; first result is a preview, not a silent write. Logically distinct replacement preview when equipment allows it. |
| 3. User with a written routine | Find an exercise by name, add it in order, change its prescription, and see the right sets in training view. |
| 4. Busy gym, equipment unavailable | Replace an exercise for the displayed date, not the weekly plan; don't lose logged sets. |
| 5. Distracted lifter mid-workout | Mark a set, resume after reload, and jump/focus the first unfinished set without scroll obstruction. |
| 6. Small phone and one hand | At 320 and 390 CSS px, use the top menu, planner, and logs with no horizontal overflow, obscured focus, or sacrificed target sizes. |
| 7. Brazilian Portuguese user | Use PT-BR interface, guides and weekday names; find an exercise in Portuguese, store 12,5 kg numerically, change languages and preserve the plan and marks. |
| 8. Reduced motion or keyboard use | Diagrams start still on reduce; alternate pose available; guide/dialog returns focus; completion has text/semantics. |
| 9. Gym without internet | After initial hosted load, and from the downloaded file, read a guide, complete a set and reload offline; no external request before a deliberate demo tap. |
| 10. Returning weekly planner | Existing days protected by default; use goals and save selected days only; easy weekend slots stay light; no automatic weights. |

## Scoring and ship gate

- **Effectiveness:** one point per profile when its core outcome is observed, zero if not. Report successes out of 10, plus separate failure explanations and extended case results. Never turn 10/10 scripted cases into a claim about all people.
- **Efficiency:** count touches/keystrokes for comparable tasks, excluding fixture setup and automatic reload. Compare baseline and candidate. Targets: check/uncheck in one action; jump from progress in one; empty day → saved training ≤3 actions. Automation runtime is not human task time.
- **Accessibility and integrity:** no loss or accidental overwrites, wrong-day actions, inaccessible dialogs, or pre-tap external media. Check mobile reflow/zoom, visible focus and target sizes. WCAG 2.2 AA target minimum is 24 CSS px subject to its exceptions; prefer a 44 CSS px touch surface for primary gym actions. Exercise names, IDs, saved marks and numerical loads remain separate from locale.
- **Human satisfaction:** not measured by automation. With consenting people, collect a 7-point Single Ease Question after each task and SUS after the session. Record observable errors and time separately; don't simulate ratings.
- Before release, fix major failures and rerun the same profile scripts on the candidate. Document passes, checks not run, and any remaining limitation. Do not pursue a higher number by hiding a hard case or changing task success thresholds.

## Reproduce

Use a development environment with Playwright and Chromium available. From the repository root, run `node qa/mobile-smoke.cjs`. Set `PLAYWRIGHT_MODULE` to an existing package path if needed. Set `STUDIO_QA_URL` to the exact downloaded previous build for a baseline. The script uses isolated Chromium contexts and reports task outcomes, browser errors and action counts. Check hosted service-worker offline behavior separately from the file run.

## Basis

[ISO 9241-11:2018](https://www.iso.org/standard/63500.html) defines usability in context through effectiveness, efficiency, and satisfaction. [WCAG 2.2](https://www.w3.org/TR/WCAG22/) grounds accessibility checks. [Sauro & Dumas, 2009](https://doi.org/10.1145/1518701.1518946) compares post-task ease questions. [Brooke's SUS](https://hci-studies.org/methods-and-measures/downloads/SUS_Brooke1996.pdf) is a post-session questionnaire. [Faulkner, 2003](https://doi.org/10.3758/BF03195514) documents sampling variation in small usability studies.
