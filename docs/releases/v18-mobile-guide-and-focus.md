# v18 · Room for mobile labels, inline guides and chest/triceps focus

## Mobile usability gate

- Core workflow rubric: v17 **10/10** → v18 **10/10** in Chromium mobile emulation. The same ten scenarios cover first open, day generation, manual editor, substitutions, checkmarks, narrow workspaces, Portuguese, reduced motion, offline, and weekly planning with an existing plan. Empty-day generation remains three actions; adding and setting an exercise remains six.
- Expanded text and native-select fit: v17 had **44 failing screen states out of 108** → v18 **0/108**. The same check covers the daily view, Menu, Credits, week preview, generator settings and day preview at 320/360/390 CSS pixels, in English and Brazilian Portuguese, with root text styled to 100%, 150%, and 200%. It checks clipped text ranges, contained controls, longest native select labels, and no sideways page scroll. Headings and buttons may wrap rather than truncate. Short filter labels preserve their intent and exercise-library names are unchanged.
- Repeat locally with Playwright's Chromium: `node qa/mobile-smoke.cjs` and `node qa/mobile-text-fit.cjs`. Specify `PLAYWRIGHT_MODULE` for a separately installed Playwright package. The check emulates phone sizes; it is not a physical-device or real-participant test.

## Exercise guides and workout generation

- Up to 11 exact, original exercise stills from Nitin Raturi licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) are shown inline on request, with source and license credit. Not bundled, copied, reshaped, or fetched before an explicit tap. Third-party GIFs/clips are not embedded or auto-played. Unlicensed or unconfirmed media remain normal optional links only.
- In current desktop Chromium at 320 px PT-BR and 390 px English, barbell bench art decoded from its public provider over HTTP 200 without opening a popup. Verified quiet initial load, reduced-motion pose switch availability, inline hide, no request when offline, failure fallback (deliberate block and 8-sec timeout), non-inline link still present and rapid guide-to-menu focus.
- Chest & triceps / Peito e tríceps used the randomized existing daily preview; two successive previews at each test size used different unique, non-weighted exercise sets, each with both chest and direct triceps. Verified that previewing does not save and unsupported machine-only configuration explains which equipment is needed. No timers, tracking or new personal data handling.
