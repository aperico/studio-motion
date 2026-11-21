# Studio Motion v17 usability review

The [ten-profile rubric](../USABILITY.md) separates task performance, action count,
accessibility and safe data handling from satisfaction. Evaluation uses isolated
synthetic mobile-browser sessions. It is not a user survey and should not be read
as a general usability rating.

The v16 comparison uses commit `8d45559e9c8b81a2dda5acf2605a8aed6173223e`.
See individual checks in [the replay script](../../qa/mobile-smoke.cjs).

| # | Simulated profile and core task | v16 | v17 |
|---|---|---|---|
| 1 | First-time user can land on the correct empty day | Pass | Pass. A direct day-planning action is visible. |
| 2 | Busy user previews and saves a day | Pass, 4 actions | Pass, 3 actions. New preview-only day regeneration. |
| 3 | User enters a written routine and changes sets | Pass, 7 actions | Pass. Library now starts open for an empty plan. |
| 4 | Gym equipment occupied; swap today without altering the weekly plan | Pass | Pass. Added localized empty and protected-state messages. |
| 5 | Interrupted workout; resume marks and jump to next set | Pass | Pass. |
| 6 | Small phone; use top menu and editor without horizontal overflow | Pass | Pass. Labeled Menu and predictable planning-button positions. |
| 7 | Brazilian Portuguese speaker; read the UI and find an exercise | Fail. Portuguese search alias worked, UI stayed in English. | Pass. PT-BR UI, 92 exercise translations, persisted locale and numeric loads. |
| 8 | Reduced-motion user; view still and alternate pose | Pass | Pass. |
| 9 | Offline user; open workout, record a set and reload | Pass | Pass. |
| 10 | Returning weekly planner; preserve an occupied day and apply selected days | Pass | Pass. Goals are opt-in; recovery is lighter. |

## Iterations from checks

- Empty state now offers the day's auto-plan directly. Automatic generation is a preview; nothing changes until Save.
- Empty manual plan opens the exercise library instead of requiring another navigation step.
- Hamburger alone was an ambiguous label. The menu is now named **Menu**, with language at the top and credits/updates grouped below. Planning remains in the header rather than being buried.
- Rapidly closing an exercise guide and opening Menu no longer steals focus from Menu, and the inaccessible credits resource was replaced by a reachable exercise directory.
- The integrated candidate exposed an English empty result on a Portuguese replacement search. Empty/no-change feedback and action labels were translated and included in retest.
- The five shown recovery exercises with suitable sources have direct GIFs or stills. A sixth, floor-seated heel-to-toe rock, uses a clearer original drawing and contact cues; no chair-only stand-in was used. There are 39 external demos out of 92 exercises; the remainder still have an offline illustration.
- Saturday and Sunday now preview three gentle, no-equipment movements rather than eight. Training choices vary within the requested muscle groups. `Glutes & legs` and `Upper body` are self-selected by anyone, not gated by sex. [ACSM's resistance-training evidence review](https://pubmed.ncbi.nlm.nih.gov/41843416/) and a [2025 meta-analysis of relative hypertrophy](https://pubmed.ncbi.nlm.nih.gov/40028215/) support starting from the user's goal, rather than assuming that people need different core exercises because of sex.

No real-participant time, satisfaction, physical-phone ergonomics, assistive-technology audit, or population estimate is claimed.
