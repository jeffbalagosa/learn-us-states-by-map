# Add Fail Sound on Three Strikes

## Why
When a user answers incorrectly three times and the correct answer is automatically highlighted, there is currently no distinct audio feedback to signal this failure event. Playing the 'complete' sound is misleading as it suggests success rather than a hint being triggered due to multiple failures. A dedicated fail sound (`fail-trumpet.mp3`) will provide clearer feedback that distinguishes this automatic hint event from quiz completion.

## What Changes
- Add a new 'fail' audio clip type to the audio feedback system
- Play `public/audio/fail-trumpet.mp3` when the three-strike threshold is reached and the hint is automatically revealed
- Replace the current 'complete' sound with 'fail' sound at the three-strike event (UsMap.tsx:100)

## Impact
- Affected specs: `audio-feedback`
- Affected code:
  - `src/hooks/useAudioFeedback.ts` (add 'fail' clip type)
  - `src/UsMap.tsx` (change audio.play call from 'complete' to 'fail' at line 100)
