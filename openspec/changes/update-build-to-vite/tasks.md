## Tasks
- [ ] 1. Update `package.json` to drop `react-scripts`, add Vite/Vitest dependencies, and replace the CRA `start/build/test` scripts with `dev/build/preview/test`.
- [ ] 2. Adjust `tsconfig.json` (and any auxiliary tsconfig files) so Vite's defaults work: set `jsx` to `react-jsx`, update `module`/`target`, and ensure the `types` include `vite/client`.
- [ ] 3. Replace the CRA entry files with Vite equivalents: create `src/main.tsx`, move ReactDOM mounting there, and delete the old `src/index.tsx`.
- [ ] 4. Rewrite `index.html` for Vite (remove `%PUBLIC_URL%` tokens, include `<div id="root"></div>`, and load the script via `type="module"` plus `/src/main.tsx`). Keep only the assets the page actually needs.
- [ ] 5. Add `vite.config.ts` configured with the React plugin and any path aliases we rely on; confirm static assets resolve via the `public/` folder without CRA-specific settings.
- [ ] 6. Remove CRA-only artifacts (`src/react-app-env.d.ts`, `web-vitals`, `reportWebVitals`, unused manifests, `NODE_OPTIONS` hacks) and update `.gitignore` to ignore `dist/` instead of `build/`.
- [ ] 7. Refresh docs: update README setup instructions to use `npm run dev/build/test`, note the new output folder, and delete the obsolete `deploy.sh`.
- [ ] 8. Install dependencies (`npm install`) and run `npm run dev`, `npm run build`, and `npm run test` to confirm the migration succeeded end-to-end.
