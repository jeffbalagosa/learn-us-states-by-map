# Deployment Specification Delta

## ADDED Requirements

### Requirement: GitHub Pages hosting configuration

The application MUST be configured to deploy to GitHub Pages using the gh-pages branch so users can access the quiz at a public URL without cloning the repository.

#### Scenario: Vite base path matches GitHub Pages URL

- **GIVEN** the app is built for GitHub Pages deployment
- **WHEN** Vite builds the production bundle
- **THEN** all asset paths use the base path `/learn-us-states-by-map`
- **AND** the application works correctly when accessed at `https://jeffbalagosa.github.io/learn-us-states-by-map`

#### Scenario: Deploy command builds and publishes

- **GIVEN** a developer runs the deploy command
- **WHEN** the command executes
- **THEN** it runs the build process to create fresh production assets
- **AND** it pushes the `dist/` contents to the gh-pages branch using the gh-pages package
- **AND** GitHub Pages serves the updated content

### Requirement: Cross-platform deployment automation

The project MUST use the gh-pages npm package for deployment automation so developers can deploy with a single command on any platform including Windows, macOS, and Linux.

#### Scenario: npm run deploy publishes changes

- **GIVEN** changes have been committed to the main branch
- **WHEN** a developer runs `npm run deploy`
- **THEN** the gh-pages package builds the application
- **AND** pushes the built files to the gh-pages branch
- **AND** GitHub Pages automatically serves the new version

#### Scenario: Cross-platform deployment works on Windows

- **GIVEN** a developer is working on a Windows machine
- **WHEN** they run `npm run deploy`
- **THEN** the gh-pages package executes without requiring bash or Unix tools
- **AND** the deployment completes successfully

### Requirement: Deployment documentation

The README MUST document the deployment process and include the live site URL so users know how to access and deploy the application.

#### Scenario: README includes live site link

- **GIVEN** a user reads the README
- **WHEN** they look for the deployed application
- **THEN** they find a prominent link to the GitHub Pages URL
- **AND** the link directs to `https://jeffbalagosa.github.io/learn-us-states-by-map`

#### Scenario: README documents deployment steps

- **GIVEN** a developer wants to deploy changes
- **WHEN** they consult the README deployment section
- **THEN** they find clear instructions for running `npm run deploy`
- **AND** understand that deployment requires push access to the repository
