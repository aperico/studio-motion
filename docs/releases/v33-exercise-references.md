# v33 · More optional exercise form references

All 95 exercises retain Studio Motion’s original offline diagrams and instructions. An optional exercise-matched image, loop, clip, or illustrated reference is available for 94 of 95 exercises. Floor-seated heel/toe raises remain offline-only: a chair, standing movement, or generic calf clip would not match.

Of these references, 21 exercises can show a credited [Nitin Raturi illustration](https://fitness.raturi.in/) inline after a tap under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), including four newly available images. Other sourced references remain direct, labeled, user-initiated links with no third-party embeds or bundled copies. Nothing fetches external media while loading a workout or merely opening a guide.

Where playable GIFs and short files were available, the audit checked the actual visual frames and relevant setup. A few publisher video links were checked from their public thumbnails and metadata, not full playback; links can change or become unavailable. No substitute was added for the remaining floor exercise just to increase coverage.

The integration regression is `qa/media-references.cjs` with Playwright Chromium. It verifies coverage and source permissions by path, normal training inline and offline behavior, no prefetch, and no workout mutations. For the opt-in real image fetch and offline fallback, serve the app on loopback and pass `STUDIO_QA_URL`.
