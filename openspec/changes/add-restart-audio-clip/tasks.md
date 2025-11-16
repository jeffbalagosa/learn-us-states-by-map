# Tasks: add-restart-audio-clip

## Implementation Steps

1. **Update useAudioFeedback hook to support 'restart' clip type**
   - [x] Add 'restart' to the `ClipName` type in `src/hooks/useAudioFeedback.ts`
   - [x] Add restart path mapping to `CLIP_PATHS`: `restart: '/audio/restart.mp3'`
   - [x] Add restart buffer to `buffersRef` initialization
   - [x] Add restart tracking to `playingRef` initialization
   - [x] Include restart in preload calls during first interaction
   - **Validation**: TypeScript compiles without errors; all clip types include restart

2. **Update restartQuiz to play restart audio**
   - [x] Change `audio.play('complete')` to `audio.play('restart')` in `src/UsMap.tsx:54`
   - **Validation**: Manual test confirms restart.mp3 plays when clicking "Restart Quiz"

3. **Update tests for new clip type**
   - [x] Update `src/hooks/useAudioFeedback.test.ts` or `useAudioFeedback.test.tsx` to include 'restart' in clip type assertions
   - [x] Add test case for restart clip playback behavior
   - **Validation**: `npm test` passes with restart clip coverage

4. **Manual testing and audio quality verification**
   - [x] Test restart audio playback in browser
   - [x] Verify restart.mp3 duration and quality are acceptable
   - [x] Confirm no audio stacking when rapidly clicking restart
   - [x] Test audio unlock on first user gesture still works
   - **Validation**: Audio plays smoothly, no overlaps, clear user feedback

## Notes
- The restart.mp3 file already exists at `public/audio/restart.mp3`
- No breaking changes to public API since only adding a new clip type
- Change is backward compatible - existing 'success', 'error', 'complete' clips unchanged
