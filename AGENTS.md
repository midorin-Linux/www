# Repository guidance

## Project stack

- Vite, React 19, and TypeScript; `src/main.tsx` is the application entry point.
- Tailwind CSS 4 is integrated through `@tailwindcss/vite`; its CSS entry is `src/index.css`.
- React Router handles client-side routing, Motion provides animation APIs, and Lucide React provides icons.
- Oxlint is run by `bun run lint`. Prettier uses the repository `.prettierrc`.
- Bun is the repository package manager (`bun.lock`). Keep the lockfile in sync with any dependency changes.

## Maintenance rules

- Read the relevant implementation and nearby usage before changing behavior. Follow existing component, route, styling, and naming patterns; avoid parallel abstractions for the same job.
- Keep components and routes focused. Reuse shared UI only when there is an actual repeated pattern; do not add dependencies or infrastructure without a concrete need.
- Prefer semantic HTML and accessible controls. Use Lucide React instead of introducing hand-drawn or unrelated icon conventions. Keep animations purposeful and respect reduced-motion preferences when adding motion.
- Use Tailwind utilities for styling in the existing setup. Preserve clear component boundaries; do not introduce another CSS framework or styling system.
- Keep TypeScript types precise. Avoid `any`, unused code, and suppressions that hide errors; address the underlying issue.
- Update every affected caller when changing a component, route, or shared API. Remove obsolete code rather than keeping compatibility paths without a requirement.
- Update README or other relevant documentation when commands, setup, or user-visible behavior changes.

## Verification

- Run `bun run lint` and `bun run build` after application changes.
- For behavior or UI changes, also run the app with `bun run dev` and exercise the affected flow in the browser; a passing build alone does not verify runtime behavior.
- Format changed files with `bunx prettier --write <files>` when needed. Do not add package scripts unless the project needs them and the script is implemented.
