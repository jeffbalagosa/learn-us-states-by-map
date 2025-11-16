## MODIFIED Requirements
### Requirement: README provides setup instructions
The README MUST describe how to install dependencies plus the Vite-based dev/build/test commands so contributors can run the project locally.

#### Scenario: Developer sets up the project
```
GIVEN a developer has cloned the repository
WHEN they follow the setup instructions in README
THEN they can install dependencies using npm install or yarn install
AND they can launch the dev server with npm run dev (Vite)
AND they can run npm run build to produce the dist/ bundle
AND they can run npm run test to execute the Vitest-powered unit tests
```
