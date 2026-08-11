# Marketing recovery after machine resets

## Restored now

- canonical PL and EN service advertisement drafts
- WhatsApp first-reply template
- quote-request field list
- deterministic offline generator
- generated review pack and machine-readable connector status
- CI guard that refuses paid or automatic publication settings

## Verified topology

- HP is the primary management and approval machine.
- MSI is a separate worker and future offline-agent host.
- Lenovo remains a separate Windows and MT5 workstation. Its SSH timeout is investigated independently.
- Google Drive is evidence and backup, not runtime source of truth.
- GitHub is the versioned source for the public Profito site and this marketing pack.

## Connector state

- GitHub Pages: verified repository path
- Google Drive: verified evidence source
- Telegram: historically worked on the old HP installation; rebuild requires a fresh local secret and a test message
- Gemini: concept and responsibility were documented, but no verified post-reset API configuration exists
- Jotform and Gmail: planned lead intake and notifications, not yet verified after reset
- Google Ads: publishing disabled; no campaign or budget action is performed by this repository

## Safe activation order

1. Generate and review the pack locally with `npm run marketing:generate`.
2. Replace the contact placeholder in the source file with an approved public contact.
3. Rebuild Telegram approval on HP using a local secret outside Git.
4. Verify Jotform and Gmail with one low-data test submission.
5. Optionally connect Gemini only for draft generation, with human approval still required.
6. Configure an advertising account only after the complete dry run is accepted.

## Do not change yet

Do not publish ads, enable paid campaigns, rotate machine keys, or alter Lenovo services, firewall rules, scheduled tasks, watchdogs, or autosync until their separate verification is complete.
