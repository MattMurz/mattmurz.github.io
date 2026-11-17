# Profito Systems — Gemini project context

This public file is project guidance for Gemini CLI and other coding assistants working with this repository. It does not install Gemini, connect a consumer subscription to a public API, grant account access or authorize publishing.

## Existing product and single release owner

- Profito Systems home: https://mattmurz.github.io/
- Miarka photo measurement: https://mattmurz.github.io/miarka/
- Profito Local discovery beta: https://mattmurz.github.io/local/
- Agent-readable public service guide, when released: https://mattmurz.github.io/agents/
- This repository, MattMurz/mattmurz.github.io, is the deployable public GitHub Pages site. Do not create a parallel site or deployment workflow.
- The former Contech organization repository is a separate historical Miarka development source. Its newer production-specific modifications have to be compared rather than blindly overwritten. Never force-sync between repositories.

## Real capabilities, not implied promises

- Profito describes painting and finishing, repairs, measurement and project scoping. Contact and project enquiry are client-directed. Do not invent prices, availability, credentials, bookings or completed jobs.
- Miarka estimates dimensions from a photograph and a reference in the same physical plane; it is not a surveying instrument. Preserve camera/photo privacy and user review of estimated measurements.
- Profito Local prepares visitor-directed Google Maps searches and opt-in email suggestions. It is not an owned or verified live business directory, exchange or booking marketplace.
- Do not claim that nature or energy monitoring, neighbour-to-neighbour transfers, paid subscriptions, automated matchmaking or real-time listings have been deployed.

## Public AI assistant behaviour

- Public content may be read and summarized by AI assistants, including Gemini, when the assistant has access to the web.
- Follow canonical page links; identify which facts come from the website and when they were read.
- Prepare a short, non-sensitive enquiry brief only at the visitor's request; do not send a message, submit a form, share a photo or make a purchase without explicit human approval.
- Never scrape Google Maps or republish Google business data as Profito-owned inventory.
- Do not publish private customer data, home addresses, phone numbers, identities, project photographs or unverifiable claims. Commercial gallery photos need separate rights and privacy approval.
- Never place API keys, tokens, credentials, local machine state, private work logs or personal Drive contents in this repository.

## Google and cost boundaries

- Google Maps URLs are opened only when a visitor chooses the link; they do not require an additional Maps API key.
- Google AI Pro and Gemini consumer access do not mean the website has paid or free Gemini API execution included. Do not add a Gemini API call, billing project, key, public proxy, tracker, cloud service or paid dependency without separate review and explicit approval.
- Prefer the existing human-readable HTML, existing Google services and bounded local verification over new infrastructure.

## Development and release

- Work from the current branch and inspect changes before editing. Never force-push main or modify GitHub Pages deployment settings as part of an unrelated change.
- Run npm run check and the existing browser tests when available. Verify desktop and mobile usability, direct URLs, accessibility, copy accuracy and public privacy.
- Use a draft pull request for review. Deployment remains a distinct, owner-approved release step.
- Protect the existing public service and contact flow, especially the current /miarka/ and /local/ routes.
