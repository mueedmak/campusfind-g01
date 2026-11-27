# G01 team handoff

The initial implementation was completed by Abdul Mueed Malik with Codex assistance. These are new feature assignments for the other members to implement, test, and commit themselves. Record completed work accurately in the README after merging.

## Nameer Khan — completed

Main file: `src/components/item-list.tsx`.

Added a Clear filters button resetting search, status, category, and sorting, plus regression checks for resetting combined filters and retaining saved items.

Commit: `05597c8` by NameerKhan7. Merged through PR #2: https://github.com/mueedmak/campusfind-g01/pull/2

Video: explain the controlled filter state and how the reset handler restores it.

## Inshal Yousaf — completed

Added a live character counter using the trimmed description length, plus conditional aria-describedby references connecting the count and validation error to the description field in ReportForm.

Commit: `4994a49` by Syed Inshal Yousaf. Merged through PR #1: https://github.com/mueedmak/campusfind-g01/pull/1

Video: explain values.description, the existing minimum-length validation, and the conditional accessible description. The earlier confirmation-checkbox suggestion is not part of the completed contribution.

## Git workflow

Abdul must add teammates as collaborators for direct pushes, or they can fork the public repository and open pull requests.

Each member should clone the repository, create their own branch, implement their assigned feature, run `npm run typecheck` and `npm run build`, and commit using their own Git identity. Add or update relevant browser coverage when useful. Open a pull request for review; do not change another person's Git identity to manufacture contribution history.

Abdul reviews and integrates the changes, updates the contribution table with actual work, redeploys the latest source to Vercel, and regenerates the ZIP. Automatic Vercel deployment on Git pushes is not configured yet. All three members must speak in the video; the assignment does not permit one person to substitute for the others.
