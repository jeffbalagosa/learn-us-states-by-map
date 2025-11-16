# Project Context

## Purpose
An interactive educational web application that helps users learn and memorize the locations of all US states on a map. The quiz challenges users to identify states by clicking on them, tracks completion time, counts mistakes, and provides hints after multiple incorrect attempts.

## Tech Stack
- **TypeScript** (v4.0.3) - Type-safe development with strict mode enabled
- **React** (v17.0.1) - UI framework using functional components and hooks
- **react-simple-maps** (v2.3.0) - Map rendering and geographic visualization
- **d3-geo** (v2.0.1) - Geographic projections and calculations (geoCentroid)
- **Lodash** (v4.17.20) - Utility functions for array manipulation and shuffling
- **Create React App** (v4.0.0) - Build tooling and development environment
- **Jest & React Testing Library** - Testing infrastructure (configured but not actively used)

## Project Conventions

### Code Style
- **TypeScript strict mode** enabled for type safety
- **Functional components** with React Hooks (useState, useEffect)
- **PascalCase** for component files (UsMap.tsx, UsState.tsx)
- **camelCase** for variables and functions
- **SCREAMING_SNAKE_CASE** for constants (TOTAL_ERRORS_UNTIL_HINT, GEO_URL)
- **CSS modules** per component (UsMap.css, UsState.css, App.css)
- **Unselectable** class convention for non-selectable UI elements
- **No semicolons** - ESLint extends react-app configuration

### Architecture Patterns
- **Component-based architecture**: App → UsMap → UsState hierarchy
- **State management**: React hooks (useState) for local component state, no external state management
- **Props drilling**: State passed down through component props
- **Utility module pattern**: Centralized utilities in Utils.ts
- **Data-driven rendering**: State data in JSON, map from external GeoJSON CDN
- **Inline component definitions**: Helper components like WashingtonDC defined in same file
- **Geographic calculations**: Using d3-geo's geoCentroid for label positioning
- **Special case handling**: STATE_NAME_OFFSETS object for small northeastern states

### Testing Strategy
- **Testing framework**: Jest with React Testing Library configured
- **Current status**: No tests implemented yet (opportunity for improvement)
- **Available scripts**: `npm test` configured via react-scripts
- **Test files**: Should follow `*.test.ts` or `*.test.tsx` pattern

### Git Workflow
- **Main branch**: `main` for production-ready code
- **Feature branches**: Use `feat/` prefix (e.g., currently on `feat/v2`)
- **Commit style**: Lowercase, imperative mood, concise descriptions
  - Examples: "prevent overlapping", "remove warnings", "add orientation to readme"
- **No formal convention**: Commits follow practical, descriptive style rather than Conventional Commits
- **Deployment**: Uses deploy.sh script (likely for GitHub Pages)

## Domain Context
- **US Geography**: Application covers all 50 US states plus Washington D.C.
- **State data**: Stored in `src/data/allStates.json` with state names, IDs, and abbreviations
- **Map projection**: Uses geoAlbersUsa projection (standard for US maps)
- **GeoJSON source**: CDN-hosted US Atlas data from jsdelivr.net
- **Quiz mechanics**:
  - States presented in random order (shuffled)
  - 3 wrong guesses trigger automatic hint (state highlights in gold)
  - Visual feedback: green for correct, red for incorrect, gold for hint
  - Timer tracks total completion time (MM:SS format)
  - Restart functionality resets quiz state and timer

## Important Constraints
- **Client-side only**: No backend server, purely static web application
- **No user accounts**: No authentication or user data persistence
- **Browser-based**: Relies on modern browser support for SVG and React
- **External data dependency**: GeoJSON loaded from CDN (requires internet connection)
- **Mobile considerations**: CSS includes orientation handling (portrait/landscape)
- **Performance**: Renders all 50+ state SVG elements simultaneously
- **Accessibility**: Limited - no keyboard navigation or screen reader support implemented

## External Dependencies
- **US Atlas GeoJSON**: https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json
  - Provides state boundary geometries
  - Version locked to us-atlas@3
  - Critical for map rendering
- **GitHub Pages**: Deployment target (based on deploy.sh and commit history)
- **No backend APIs**: All data bundled with application
