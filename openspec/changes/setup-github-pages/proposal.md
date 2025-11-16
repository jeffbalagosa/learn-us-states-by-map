# Setup GitHub Pages Deployment

## Why

The application currently builds to `dist/` but lacks an automated deployment pipeline to make it publicly accessible. GitHub Pages provides free hosting for static sites and is the ideal deployment target for this educational web app. Setting up GitHub Pages deployment will enable users to access the quiz without needing to clone and build the repository locally.

## What Changes

- Add Vite base path configuration for GitHub Pages repository-style hosting (`/learn-us-states-by-map`)
- Install `gh-pages` npm package for cross-platform deployment automation
- Update npm scripts to include a deployment command using `gh-pages`
- Add deployment documentation to README
- Create new `deployment` capability spec to track hosting requirements

## Impact

- **Affected specs**: New `deployment` capability
- **Affected code**:
  - `vite.config.ts` - Add base path configuration
  - `package.json` - Add gh-pages dependency and deploy script
  - `README.md` - Add deployment instructions and live site link
