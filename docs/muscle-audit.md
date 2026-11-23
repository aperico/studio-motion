# Muscle catalog audit

The [bilingual inventory](muscle-catalog.jsonl) records all 95 exercises, their equipment, illustration rig, and explicit focus/support mappings. It describes what the app renders. It is not an anatomical validation of each entry.

Seated hip abduction already mapped to the outer hip on the audited v36 base, with no hamstrings highlight. This change identifies the lateral glutes and adds tensor fasciae latae as a supporting muscle. The compact front/back map and the pose markers use the same keys. The library caption now uses the shared mapping, as do training and guide target readouts. Day and week overview highlights use primary targets from that mapping. Planner grouping still uses exercise categories with its existing direct muscle exceptions.

Machine-specific EMG supports gluteus medius and TFL involvement. These papers measured gluteus medius and TFL, and do not establish the activation of gluteus minimus. Its inclusion denotes its anatomical role as a hip abductor.

- [Paz et al., controlled comparison of machine, side-lying, and clamshell abduction](https://pubmed.ncbi.nlm.nih.gov/35500965/)
- [de Farias et al., hip angle and recruitment in machine abduction](https://www.nature.com/articles/s41598-026-69830-7)

Remaining review: validate each variant's anatomical mapping and pose, including variants that share a simplified rig. The manifest and representative render checks are the starting point for that work.

## Live and historical comparison

The public HTML and service worker matched the v36 release commit `b487195` byte-for-byte. Git history shows that the original muscle-map commit `7c1ba2f` used `target("abduct","hip")`, as did the v36 base. Neither specifies hamstrings. The screenshot discrepancy remains unexplained, since neither the public bytes nor the historical abduction mapping reproduced it.

The isolated 320 px PT-BR upgrade test serves the actual v36 HTML and worker first, then switches the same origin to the candidate. It seeds a synthetic saved abduction workout and logs a set before the upgrade. The test verifies the corrected caption, byte-for-byte persistence of local storage, and an offline reload retaining the workout and mark. Run `node qa/muscle-upgrade.cjs` with Playwright available.

[Anatomical reference for synergistic hip abduction by TFL and the gluteus medius and minimus](https://www.ncbi.nlm.nih.gov/sites/books/NBK499870/).
