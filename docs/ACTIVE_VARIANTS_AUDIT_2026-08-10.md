# Profito source variants audit

Date: 2026-08-10

## Source decision

The public site currently serves the `add-miarka-from-contech-measure` branch. This was verified by comparing the live page with the remote branch content. The remote `main` branch is an older, shorter variant and is not used as the active publication source.

The Drive archive contains two Profito folders. The newer folder includes the same project archive, `miarka`, `assets`, `docs`, and publishing files, but it also contains a `.git` snapshot. Neither Drive folder is treated as a separate deployment target. The Git checkout remains the single editing source, while Drive remains an archive and backup.

## Changes in this branch

- Rebuilt the active page around the existing video, Miarka tool, project assets, services, and quote-request fields.
- Added a representative gallery without removing the full asset archive.
- Replaced the public gallery with a manually reviewed no-person set: `work_013`, `work_167`, `work_208`, `work_249`, `work_101`, `work_106`, `work_111`, and `work_151`.
- Added a browser-only quote summary flow. It does not invent a contact address or silently send data.
- Added a local site check for references and inline JavaScript.
- The site check now fails if the public gallery changes without updating the reviewed asset list.

## Follow-up

The older `main` variant should not be edited independently. If it is retained as a backup, its purpose should be documented rather than allowing it to drift into a second active site.
