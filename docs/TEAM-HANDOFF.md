# G01 team handoff

The initial implementation was completed by Abdul Mueed Malik with Codex assistance. These are new feature assignments for the other members to implement, test, and commit themselves. Record completed work accurately in the README after merging.

## Nameer Khan — listing and discovery

Main file: `src/components/item-list.tsx`.

1. Add a location dropdown populated from unique locations in the current store items. Include an All locations choice.
2. Combine location filtering with keyword search, Lost/Found status, category, and sorting.
3. Add a Clear filters button that resets the query, status, category, location, and sort to their defaults.
4. Keep labels accessible and controls usable at 375px, 768px, and 1280px.
5. Check combinations that produce results and an empty state. Confirm newly reported locations appear in the filter.

Suggested branch: `nameer/location-filter`. Suggested commit subject after implementation: `Add location filtering and reset controls to item board`.

Video: explain controlled filter state, how the filter predicates combine, map keys, and why ItemList needs use client.

## Inshal Yousaf — report form

Main file: `src/components/forms.tsx`, inside ReportForm. Coordinate before modifying ContactForm.

1. Add a controlled checkbox confirming that the report is accurate and does not expose sensitive information.
2. Require the checkbox before publishing, with a clear associated validation error. Do not use browser-only native validation as a replacement for React validation.
3. Add a description character counter. Keep the existing 20-character minimum and make the limit guidance clear.
4. Verify the empty form, unchecked confirmation, short description, invalid email, future date, and successful report submission.
5. Confirm valid reports still appear on the board and their session detail page works.

Suggested branch: `inshal/report-validation`. Suggested commit subject after implementation: `Improve report confirmation and description feedback`.

Video: explain controlled inputs, validation errors, submit handling, and how addItem updates shared context.

## Git workflow

Abdul must add teammates as collaborators for direct pushes, or they can fork the public repository and open pull requests.

Each member should clone the repository, create their own branch, implement their assigned feature, run `npm run typecheck` and `npm run build`, and commit using their own Git identity. Add or update relevant browser coverage when useful. Open a pull request for review; do not change another person's Git identity to manufacture contribution history.

Abdul reviews and integrates the changes, updates the contribution table with actual work, redeploys the latest source to Vercel, and regenerates the ZIP. Automatic Vercel deployment on Git pushes is not configured yet. All three members must speak in the video; the assignment does not permit one person to substitute for the others.
