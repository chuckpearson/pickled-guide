# Dinkish guide redirect

The current guide lives at **https://dinkish.app/docs**. The product website and public beta changelog live at https://dinkish.app and https://dinkish.app/changelog.

This repository keeps the previous GitHub Pages address working for older app builds and bookmarks. `index.html` redirects to the new guide and preserves old section fragments, which the new site maps to the appropriate article. A visible link and a meta refresh provide a fallback without JavaScript.

GitHub Pages serves `main` at the repository root. Historical documentation and sample screenshots remain available in Git history. The working tree contains only the redirect and its logo; no duplicate guide is maintained here. Do not resume editing guide content here; update the Blot website instead.

Website source is in the Dinkish Blot checkout (`Documents/GitHub/dinkish`): `.site/docs/` for guide pages, `.site/releases.json` for public release notes, and `.site/README.md` for the publishing workflow. Build with `python3 .site/build.py`, review, then commit and push to Blot.

For feedback, use the [Dinkish feedback form](https://tally.so/r/QK6rl8) or TestFlight → Dinkish → Send Beta Feedback. No app source, credentials, tester records, or personal Health data belong in this public repository.
