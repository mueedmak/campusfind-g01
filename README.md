# CampusFind — Campus Lost and Found

CS4032 Web Programming · Assignment 3 · Topic **57** · Group **G01** · Section **BCY-5C**

| Member            | Roll number |
| ----------------- | ----------- |
| Abdul Mueed Malik | 22i-1622    |
| Nameer Khan       | 22i-1695    |
| Inshal Yousaf     | 22i-7439    |

CampusFind helps students browse misplaced belongings, save relevant reports, and report items through a validated form. It includes 16 typed mock records, original local illustrations, keyword/category/status filtering, sorting, and simulated contact requests. This is a frontend demonstration with no backend, real accounts, or email delivery.

## Run

Node.js 20.9 or later is required (developed on Node 24).

```sh
npm install
npm run dev
```

Open http://localhost:3000. Production:

```sh
npm run build
npm start
```

Built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS 4. Scripts use Next.js's supported Webpack option because the generated Turbopack CSS loader failed on this Windows environment. Tailwind compiles through the standard PostCSS adapter.

## Routes

| Route                          | Purpose                                                  |
| ------------------------------ | -------------------------------------------------------- |
| `/`                            | Home, recent reports, and instructions                   |
| `/items`                       | Board with search, status/category filters, and sorting  |
| `/items/[id]`                  | Mock item detail, save toggle, and ownership request     |
| `/report`                      | Controlled report form, validation, confirmation         |
| `/reports/[id]`                | A report created during the current browsing session     |
| `/saved`                       | Saved items with add/remove behavior                     |
| `/about`                       | Instructions, handover guidance, and project information |
| `/contact`                     | Validated contact form and demo confirmation             |
| Unknown pages / `/items/99999` | Custom not-found screen                                  |

Each regular page exports metadata or generates a title/description from its record. `src/app/items/loading.tsx` provides a skeleton; use network throttling to see it on fast navigation. Unknown mock item IDs call `notFound()`.

## State and components

`src/data/items.ts` defines `CampusItem` and 16 mock records. `StoreProvider` owns reports and saved IDs in React state above route pages. Client navigation preserves them; refresh resets the demonstration. New reports use a category illustration. Names/emails entered in the report form are not included in the public report.

All page modules remain Server Components. Interactive Client Components need state/event handlers: `Navbar` for mobile menu state; `ItemList` for search/filter/sort; `ItemCard` for hearts; `ReportForm` and `ContactForm` for controlled inputs, validation, and confirmation; `ItemDetail` for saves/session access; `StoreProvider` for shared state.

Reusable typed components include Navbar, Footer, ButtonLink, PageHeading, StatusBadge, EmptyState, InfoCard, ItemCard, ItemList, ItemDetail, ReportForm, ContactForm, and StoreProvider. ItemList, PageHeading, InfoCard, and ContactForm are reused with different props. Lists use proper keys; images use `next/image`.

## Contributions

Abdul Mueed Malik completed the initial application implementation and deployment with the disclosed assistance of Codex. Inshal's description feedback improvement and Nameer's clear-filters improvement are both merged.

| Member            | Work / responsibility                                                                                       | Status                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Abdul Mueed Malik | Initial frontend implementation, layout, pages, integration, deployment, and submission preparation         | Initial implementation complete                                                                  |
| Nameer Khan       | Added Clear filters resetting search, status, category, and sorting, with browser regression coverage       | Complete: commit `05597c8`, merged in [PR #2](https://github.com/mueedmak/campusfind-g01/pull/2) |
| Inshal Yousaf     | Added live trimmed-description character count and accessible association of count/error text in ReportForm | Complete: commit `4994a49`, merged in [PR #1](https://github.com/mueedmak/campusfind-g01/pull/1) |

See `docs/TEAM-HANDOFF.md` for file ownership, acceptance checks, and the Git workflow. Each member should explain the changes they actually made in the video.

## Verification

```sh
npm run typecheck
npm run build
npx playwright install chromium
npm run test:e2e
```

Browser tests cover filters/sorting, saved state across navigation, invalid/valid report submission, new report details, simulated ownership requests, unknown IDs, and overflow checks at 375/768/1280px. Tests start a production server and require a build first. Set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to use an existing browser binary.

## Required links — complete before submission

- Shared GitHub/GitLab repository: https://github.com/mueedmak/campusfind-g01 (public; teammates still need collaborator access to push directly)
- Video: **PENDING — record and add accessible Drive/Unlisted YouTube link**
- Vercel live URL: https://campusfind-g01.vercel.app

The app is deployed on Vercel with public access. It was deployed directly from the verified source because the Vercel GitHub Login Connection is not configured. Configure that connection to enable automatic deployments on Git pushes. Keep the deployed source aligned with the submitted version.

## Submission and AI disclosure

See `docs/DEMO-AND-SUBMISSION.md`. Archive name: `A3_G01_22i-1622_22i-1695_22i-7439.zip`. Exclude node_modules, .next, .git, browser artifacts, and test results; include package-lock.json. Deadline: **29 November 2026, 11:59 PM**, as stated in the assignment.

OpenAI Codex was used to scaffold/implement the frontend, create original SVG illustrations, write documentation, and run checks. Each member must understand every line they present. The project was initialized with the required create-next-app tool; the application design is original.
