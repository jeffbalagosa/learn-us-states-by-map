# US States Geography Quiz

An interactive educational web application that helps users learn and memorize the locations of all 50 US states by clicking them on a map. The quiz tracks completion time, counts mistakes, provides hints after multiple incorrect attempts, and offers gentle audio feedback.

## Features

* Interactive clickable US map (SVG-based)
* Randomized state order each round
* Timer tracking your completion time
* Mistake counter with color feedback (green/red)
* Automatic hint reveal after 3 incorrect guesses
* Gentle audio cues for success, error, and completion
* Restart button to reset quiz and timer

## Getting Started

### Prerequisites

* Node.js (v18+ recommended)

### Installation

```bash
npm install
# or
yarn install
```

### Run Dev Server

```bash
npm run dev
```

### Build

```bash
npm run build
```

> Output assets are written to the `dist/` directory.

### Tests

```bash
npm run test
```

## Tech Stack

* React + TypeScript
* react-simple-maps
* d3-geo
* Vite
* CSS Modules

## Project Structure

* `src/` — React components, hooks, utilities
* `src/data/` — All state metadata JSON
* `public/` — Static assets
* `public/audio/` — Optional audio clips (`success.mp3`, `error.mp3`, `complete.mp3`)
* `openspec/` — Specs, proposals, and change history (OpenSpec-driven)

## Audio Notes

If you wish to replace the oscillator fallback tones, add the following files:

* `public/audio/success.mp3`
* `public/audio/error.mp3`
* `public/audio/complete.mp3`

Audio playback automatically preloads and caps volume for a smooth user experience.

## Deployment

The Vite build outputs static assets to the `dist/` folder, suitable for any static hosting provider (for example Netlify, Vercel, or an S3/CloudFront-style setup).

## License

MIT
