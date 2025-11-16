## Tasks
1. [ ] Curate or synthesize three gentle audio clips (success, soft error, completion/hint) under `public/audio/`, keeping each =1s and normalized to a comfortable volume.
2. [x] Implement a shared audio feedback hook/service (e.g., `useAudioFeedback`) that preloads the clips after the first user interaction, enforces a max volume of 0.4, and prevents overlapping playback.
3. [x] Invoke the audio hook from `UsMap` so correct guesses, incorrect guesses, automatic hints, quiz completion, and restarts trigger the appropriate clip without delaying UI updates.
4. [x] Manually verify on at least one desktop and one mobile browser that the sounds are audible yet smooth, no pops or stacking occur, and document the behavior in the README if needed.
