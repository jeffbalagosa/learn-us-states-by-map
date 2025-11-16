# Learn US States by Map

A small interactive quiz app that teaches and tests US state geography by identifying states on an SVG map.

## Features
- Interactive state selection on a US map.
- Timer and scoring for quizzes.
- Mistake tracking so users can review incorrect picks.
- Hints for difficult states.
- Simple, responsive React + TypeScript UI.

## Getting Started

### Prerequisites
- Node.js and npm (LTS recommended). The repo contains some compatibility notes for newer Node versions; test with your environment and set Node accordingly.

### Install

Clone the repo:

```bash
git clone https://github.com/jeffbalagosa/learn-us-states-by-map.git
cd learn-us-states-by-map
```

Install dependencies (the project may require `--legacy-peer-deps` on some environments):

```bash
npm install --legacy-peer-deps
```

### Run the app

```bash
npm start
```

This starts the development server (Create React App). Open http://localhost:3000 in your browser to use the quiz.

### Notes about Node v25
If you run into module resolution or ESM issues when using Node 25, try using Node 18/20 or a Node version manager (nvm) to switch versions; the app was developed against modern LTS versions.

## Tech Stack
- React (TypeScript)
- react-simple-maps
- d3-geo
- Create React App setup with TypeScript

For precise dependency versions, see `package.json`.

## Project Structure
- `src/` — application source and React components (UsMap, UsState, etc.)
- `public/` — static assets and `index.html`
- `data/` — Geo/state data (e.g., `allStates.json`)
- `openspec/` — design documentation and change proposals

## Contributing
Contributions are welcome — open an issue or submit a pull request for small improvements. Keep changes focused and add tests or documentation where relevant.

## License
This repository does not include an explicit license file — add one to clarify reuse terms.
