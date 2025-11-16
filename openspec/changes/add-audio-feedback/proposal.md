## Why
- The quiz currently supplies only visual feedback, so players rely on the screen to know whether a guess was right or wrong.
- Smooth, encouraging sounds make repeated practice less fatiguing and address the request for audio that is not jarring.

## What Changes
- Add three lightweight audio clips (success, soft error, completion/hint) with <1 second durations and gentle envelopes.
- Introduce a shared audio feedback hook/service that preloads clips, clamps volume, and debounces playback so sounds stay smooth.
- Trigger the appropriate clip on correct selections, wrong guesses, automatic hint reveals, and quiz completion/restart events while documenting the behavior.

## Impact
- Adds new static audio assets (~300 KB or less) and an audio feedback hook in the React codebase.
- Slightly increases the initial asset download but keeps all functionality client-side.
- Requires manual QA across desktop and mobile to confirm the cues sound smooth, respect browser autoplay restrictions, and do not overlap harshly.
