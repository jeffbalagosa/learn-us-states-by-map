```markdown
## ADDED Requirements
### Requirement: Vite dev and production build
The frontend MUST use Vite with the React plugin so the dev server and production build share a single configuration and emit assets suited for local or static hosting.

#### Scenario: npm run dev starts Vite
- **GIVEN** a developer runs `npm run dev`
- **WHEN** Vite starts
- **THEN** the React app serves from http://localhost:5173 by default with fast refresh enabled
- **AND** environment variables resolve through Vite's `import.meta.env` API

#### Scenario: npm run build outputs dist/
- **GIVEN** a developer runs `npm run build`
- **WHEN** Vite completes the production build
- **THEN** the output assets are written to `dist/`
- **AND** the bundle works when served from the repo root without GitHub Pages specific settings

### Requirement: Vitest-powered unit tests
The project MUST use Vitest so the existing React Testing Library suites continue to run through `npm run test` without relying on react-scripts.

#### Scenario: npm run test executes vitest
- **GIVEN** the repo has dependencies installed
- **WHEN** a developer runs `npm run test`
- **THEN** Vitest runs in watch mode by default
- **AND** React Testing Library assertions still succeed because jsdom and `@testing-library/jest-dom` are configured inside Vitest.

```
