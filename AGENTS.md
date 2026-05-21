# Agent Guide

Persistent context for any AI agent working in this repo.

## Project

Dutchie front-end take-home challenge. The candidate is being evaluated for a senior front-end / fullstack role. **Every line shipped must be defensible by the candidate in a live interview** — favor clarity, idiomatic patterns, and small commits over cleverness.

## Source of truth

Before doing anything, read these in order:

1. `docs/0_Requirements.mdx` — the simplified PRD (what to build).
2. `docs/1_Tickets.mdx` — the Kanban backlog (how to break the work up).

If a request conflicts with the PRD or backlog, surface the conflict — don't silently override.

## Workflow

- **Work one ticket at a time.** Pick from `## In Progress` in `1_Tickets.mdx`, or move a Backlog item there first.
- **One commit per ticket** (or per sub-task on larger tickets). Many small, well-scoped commits is an explicit grading criterion.
- **Never commit unprompted** — the user controls when to commit.
- **Check off sub-tasks** in the ticket file as you finish them. Move the ticket card to `## Done` only when its acceptance criteria are met.
- **Stay in scope.** If a task surfaces work that isn't in the current ticket, note it and propose a new ticket — don't expand the current one.

## Scope guardrails

- **Do not modify `src/index.tsx`** — that's the "Read me first!" page and must stay untouched.
- **Do not modify `src/components/layout/**`**, `src/app.tsx` routing structure, or anything in `utils/` unless a ticket explicitly says so. `src/app.tsx` is OK to edit only for the documented PDP route change (T-11).
- **All product work lives in:** `src/your-storefront.tsx`, `src/product.tsx`, `src/components/product-card/`, and new files under `src/api/` and `src/hooks/`.
- **Do not add dependencies** without explicit user approval. Everything needed is already in `package.json`.

## Stack (already installed — do not swap)

- pnpm (package manager)
- React 18 + TypeScript
- Emotion (`@emotion/styled`, `@emotion/react`)
- TanStack Query v5
- React Router v7 (`react-router-dom`)
- Vitest + React Testing Library + jsdom

## Commands

```bash
pnpm install           # one-time setup
pnpm start             # Vite dev server on :4200
pnpm run server        # API on :1337 (run in a second terminal)
pnpm test              # Vitest
```

There is no `lint` or `typecheck` script. Treat TypeScript errors surfaced by the editor / `tsc --noEmit` as blocking.

## Code conventions

### Data access

- API helpers live in `src/api/*.ts` and return typed `Promise<T>`.
- Query hooks live in `src/hooks/use-*.ts` and wrap `useQuery` / `useMutation`. Components consume hooks, never `useQuery` directly.

### Components

- Functional components only.
- Co-locate Emotion styles in a sibling `*.styles.tsx` file (see `src/components/product-card/product-card.styles.tsx`).
- Prop types declared inline (`type FooProps = { ... }`) or exported when reused by tests.
- Prefer the `Product` type from `data.ts` over redefining shapes.

### Styling — read this carefully

**The candidate prefers to do styling manually.** Do not produce opinionated CSS. When in doubt, leave the styled component empty (or near-empty) and let the candidate fill it in.

**OK to do without asking:**

- Layout primitives — `display: flex` / `display: grid`, `flex-direction`, `gap`, `justify-content`, `align-items`.
- Structural sizing for the layout to work — `width: 100%`, `max-width`, `min-height` on a container, etc.
- Responsive breakpoints using `utils/media-queries.ts`.
- Creating empty styled components as scaffolding (e.g. `export const Brand = styled.div\`\`;`).
- Reaching for `styled` over inline `css` props.

**Not OK without an explicit ask:**

- Colors, background colors, borders/border-radius beyond what's needed for layout.
- Font sizes, weights, families, line-height, letter-spacing.
- Padding, margin, gap values chosen for *visual* polish rather than structural necessity.
- Shadows, transitions, animations, hover/focus visual treatments.
- Picking spacing values from a non-existent "design system" — there isn't one.

If a ticket's wording is ambiguous (e.g. "style the card image"), default to the minimum: create the styled component, give it whatever layout properties are needed to render correctly, and stop. Let the candidate iterate from there.

### Tests

- Follow the pattern in `src/components/layout/page-wrapper.test.tsx`: wrap in `BrowserRouter` and `ThemeProvider` via a small helper.
- Use Testing Library queries that mirror user intent (`getByRole`, `getByText`) over `getByTestId`.
- Mock data fetching at the function level (`vi.mock('../api/products', ...)`) rather than mocking `fetch`.

### TypeScript

- No `any`. Use `unknown` and narrow.
- Type API responses against `Product` from `data.ts`.
- Optional chaining / nullish coalescing for fields marked optional on `Product` (e.g. `brandName`, `prices`).

## Things to avoid

- Don't over-style (see Styling above).
- Don't refactor code outside the active ticket.
- Don't write comments that narrate what the code does — only intent or tradeoffs.
- Don't add tooling (ESLint, Prettier configs, husky, etc.) unless explicitly requested.
- Don't introduce state libraries — React Query handles server state; local state is `useState`.

## Defensibility checklist (run before declaring a ticket done)

- [ ] Can the candidate explain every line they didn't write themselves?
- [ ] Does the change match an acceptance criterion in the ticket?
- [ ] Is the diff small enough to be one logical commit?
- [ ] Do existing tests still pass?
- [ ] Are there obvious gaps a reviewer would flag (missing key prop, untyped response, swallowed errors)?
