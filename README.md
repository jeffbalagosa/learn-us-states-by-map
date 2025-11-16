# Learn US States by Map

A small interactive quiz app that teaches and tests US state geography by identifying states on an SVG map.

## Attribution
- This project is a fork of [TomHerman11/us-states-quiz](https://github.com/TomHerman11/us-states-quiz). Thanks to the original author for the very cool foundational implementation and assets!

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

## Audio feedback

- This app includes an audio feedback hook that preloads short audio clips and provides a polite WebAudio fallback when audio asset files are not present.
- Place audio files (1s or less) in `public/audio/` named `success.wav`, `error.wav`, and `complete.wav` to override the fallback oscillator tones.
- The hook preloads the clips after the first user gesture, clamps playback to a max volume of 0.4, and prevents overlapping plays of the same clip.

Manual QA

- Test on at least one desktop and one mobile browser to verify the clips play smoothly and are not too loud.

## Contributing
Contributions are welcome — open an issue or submit a pull request for small improvements. Keep changes focused and add tests or documentation where relevant.

## License
This repository does not include an explicit license file — add one to clarify reuse terms.
