```markdown
# Proposal: Update build to Vite

## Why
- Create React App 4.x is no longer maintained and complicates dependency upgrades
- The repo carries workarounds like NODE_OPTIONS env flags to keep CRA working on modern Node
- Vite provides faster dev builds, reduces dependencies, and aligns with current React + TypeScript tooling

## What Changes
- Replace react-scripts with Vite + @vitejs/plugin-react for dev/build commands
- Reconfigure TypeScript/tsconfig and entry files to match Vite expectations
- Adopt Vitest so the existing React Testing Library tests keep working
- Update README to reflect the new commands and drop GitHub Pages references/deploy script

## Impact
- Dev server command changes from `npm start` to `npm run dev`
- Build output moves from `build/` to `dist/`
- Test runner switches from jest/react-scripts to Vitest
- GitHub Pages deploy script is removed until a future deployment workflow is needed
- No user-facing feature changes; only tooling/build behavior should differ

```
