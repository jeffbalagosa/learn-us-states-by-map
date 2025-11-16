# Implementation Tasks

## 1. Update Audio Feedback Hook
 - [x] 1.1 Add 'fail' to the ClipName type definition in `src/hooks/useAudioFeedback.ts:3`
 - [x] 1.2 Add fail clip path entry to CLIP_PATHS record: `fail: '/audio/fail-trumpet.mp3'` in `src/hooks/useAudioFeedback.ts:5-10`
 - [x] 1.3 Add fail buffer to buffersRef initialization in `src/hooks/useAudioFeedback.ts:16-21`
 - [x] 1.4 Add fail to playingRef initialization in `src/hooks/useAudioFeedback.ts:22`
 - [x] 1.5 Add preloadClip('fail') call in the onFirstInteraction handler in `src/hooks/useAudioFeedback.ts:64-67`
 - [x] 1.6 Add fail oscillator fallback configuration in the play function in `src/hooks/useAudioFeedback.ts:119-126`

## 2. Update Quiz Logic
 - [x] 2.1 Change audio.play('complete') to audio.play('fail') at the three-strike hint trigger in `src/UsMap.tsx:100`

## 3. Verification
 - [x] 3.1 Run the application and verify fail-trumpet.mp3 plays when three incorrect guesses occur
 - [x] 3.2 Verify the fail sound is distinct from the completion sound
 - [x] 3.3 Verify no audio clip overlap occurs when rapidly triggering the three-strike threshold
 - [x] 3.4 Test that the fail clip preloads correctly on first user interaction
