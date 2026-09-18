<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md

This repository is a minimal Next.js app using the App Router, React 19, TypeScript, and Tailwind CSS v4.

## Project conventions

- Use the workspace package manager: `pnpm`.
- Common commands:
  - `pnpm dev` for the local app
  - `pnpm build` for production build validation
  - `pnpm lint` for ESLint checks
- Keep code in the App Router structure under `app/`.
- Prefer server components by default; only add client interactivity when it is required.
- Use Tailwind utility classes in JSX before introducing new CSS.
- Keep changes scoped and minimal unless the task explicitly calls for broader refactors.
- Preserve the existing project setup and avoid modifying dependency versions or build config without a clear reason.
- Do not remove the generated Next.js warning block at the top of this file; it is intentionally kept in place.

## Relevant files

- [README.md](README.md) for the default project scaffold notes
- [package.json](package.json) for scripts and package details
- [app/layout.tsx](app/layout.tsx) for the root layout and global header
- [app/page.tsx](app/page.tsx) for the main page content
- [app/globals.css](app/globals.css) for global styles

## Working style for AI agents

- Match existing naming and structure patterns in the app.
- Prefer simple, readable React/Next.js code over abstractions that are not yet needed.
- When you add or modify UI, keep it visually consistent with the current minimal style.
- Validate with the smallest relevant command after changes; for UI or config changes, `pnpm lint` is the baseline check.

## Notes

This project does not currently include a dedicated test framework or additional docs beyond the default Next.js scaffold, so the safest verification path is to keep changes small and use the existing lint/build commands.
