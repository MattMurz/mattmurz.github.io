# Profito Systems public modules — source and release contract

Status: documented 2026-11-15. No private TRIADA data belongs in this public repo.

## Visitor paths and current website

- Home and Profito/MattMurz Works: https://mattmurz.github.io/
- Contech Measure / Miarka: https://mattmurz.github.io/miarka/
- Profito Local: https://mattmurz.github.io/local/

One umbrella brand, independent navigation. Profito Local launches real searches on Google Maps using visitor-provided category, keyword and area only. It does not contain an owned or curated directory at this stage. The site is a voluntary feedback beta, without logins, subscriptions, payments or an automatic publishing queue.

The historically desired host profito-systems.github.io currently returned HTTP 404. Do not migrate the GitHub Pages hostname, canonical links, sitemap or DNS without validating ownership, a non-breaking migration and end-to-end redirect behavior. Keep all currently shared public links working.

## Repository boundaries

**Public site / deployable host:** MattMurz/mattmurz.github.io. The only GitHub Pages production source. Contains public home, the current deployable Miarka snapshot, static Profito Local preview, visitor feedback. The project brand name is Profito Systems, independent of the temporary Pages hostname.

**Miarka/Contech development source:** profito-systems/contech-measure. Existing separate repo. Its README says main is canonical, but it is last updated October 1 while the deployed Miarka was updated November 15 with tests and a bilingual UI. This is a SOURCE-DRIFT conflict. Until reconciled, do not push the older module blindly into public production. Reconcile source against existing module history and the tested production snapshot, then enforce a single writer plus a versioned, tested one-way publication to the Pages host.

**Local community:** static user-facing preview within the current Pages repo; no separate database-backed repo yet. If self-serve listings are proven necessary, their independently moderated content and member-specific data can move into their own dedicated code service with a tested contract; do not create unused repositories, agents, accounts, managers or queues. No auto-publication of third-party details.

**Private TRIADA/NERVUS:** MattMurz/demo-repository. Operational host data, work logs and access context stay separate from any public business features.

## Maps, AI, privacy and usage

- Official Maps URLs (https://developers.google.com/maps/documentation/urls/get-started) need no Google Cloud API key and open Google Maps only when the visitor chooses the external link. Google, not Profito, supplies the results. Profito does not copy, rank, endorse or validate external businesses.
- Embedding a Google Map (Google Maps Embed API) requires a Cloud key and billing account, although usage of that product is free. Do not add an unrestricted key to Pages. Places and Gemini Maps grounding can incur usage fees; never promise zero cost and never put server-side secrets into a static page.
- Google Maps content has usage and scraping restrictions: do not scrape or re-host Google business names, addresses, reviews, contact lists or map tiles as a separate catalogue.
- Directory self-submission in this preview is an opt-in email draft. A visitor must explicitly send it. Do not publish before confirming they are the owner or authorized representative and independently reviewing the submission. Future database-backed membership requires a proper privacy notice, subject rights and retention policy, spam and abuse moderation, reporting and deletion capabilities. See UK ICO guidance: https://ico.org.uk/for-organisations/advice-for-small-organisations/privacy-notices-and-cookies/how-to-write-a-privacy-notice-and-what-goes-in-it
- Profito Local is not an online food marketplace. Food businesses may have registration, food-safety, and allergen duties: https://www.gov.uk/guidance/starting-a-food-business
- Gemini: optional future suggestion/semantic search tool, not a prerequisite for local discovery or a source of verified business facts. Grounding with Google Maps may be billed per prompt/search depending on model and has attribution requirements. See https://ai.google.dev/gemini-api/docs/maps-grounding
- Public website: no geolocation permissions, no map scraping, no logins, no backend request, no automatic recording of suggestions, and no hidden analytics added by this preview.

## Release gates

Keep production available. Stage from latest origin/main, run npm checks and Chrome interaction tests, verify no private data, confirm new sitemap and search URL safety, then publish one atomic commit, verify GitHub Actions and public HTTP/browser output. Never overwrite new work from other branches. Source drift is documented, not quietly resolved by arbitrary duplication.
