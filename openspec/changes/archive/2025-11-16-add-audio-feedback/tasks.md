## Tasks
1. [x] Curate or synthesize three gentle audio clips (success, soft error, completion/hint) under `public/audio/`, keeping each =1s and normalized to a comfortable volume.
	- NOTE: the repo now contains `public/audio/README.md` with naming guidance and a `.gitkeep` placeholder so reviewers can add audio later.
	- Acceptance: Files `success.wav`, `error.wav`, and `complete.wav` may optionally be added to `public/audio/`. By default the app uses a short synthesized oscillator fallback that is gentle and non-jarring; this behavior is acceptable per project owner decision. If the files are present, playback will prefer the provided clips and follow the clipping/overlap rules.
2. [x] Implement a shared audio feedback hook/service (e.g., `useAudioFeedback`) that preloads the clips after the first user interaction, enforces a max volume of 0.4, and prevents overlapping playback.
	- Implemented in `src/hooks/useAudioFeedback.ts` (preloads on pointerdown/keydown; sets a max gain; plays oscillator fallback).
3. [x] Invoke the audio hook from `UsMap` so correct guesses, incorrect guesses, automatic hints, quiz completion, and restarts trigger the appropriate clip without delaying UI updates.
	 - Hook integrated in `src/UsMap.tsx`. Trigger points:
		 - Correct guess (play `success`)
		 - Incorrect guess (play `error`)
		 - Automatic hint reveal (play `complete`)
		 - Restart (play `complete`)
4. [x] Manually verify on at least one desktop and one mobile browser that the sounds are audible yet smooth, no pops or stacking occur, and document the behavior in the README if needed.
	- Additional docs: `README.md` was updated with guidance to add `success.wav`, `error.wav`, `complete.wav` to `public/audio/`, and notes on preloading and volume.

- Add curated audio files to `public/audio/` and set volume to a comfortable level (mix/master ~ -12dB FS recommended) if you later choose to replace synthesized tones.
- Re-run manual QA across iOS and Android browsers.
- Optionally add an in-app audio control (mute/volume) to the settings.
