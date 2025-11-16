# Tasks: add-restart-audio-clip

## Implementation Steps

1. **Update useAudioFeedback hook to support 'restart' clip type**
   - Add 'restart' to the `ClipName` type in `src/hooks/useAudioFeedback.ts`
   - Add restart path mapping to `CLIP_PATHS`: `restart: '/audio/restart.mp3'`
   - Add restart buffer to `buffersRef` initialization
   - Add restart tracking to `playingRef` initialization
   - Include restart in preload calls during first interaction
   - **Validation**: TypeScript compiles without errors; all clip types include restart

2. **Update restartQuiz to play restart audio**
   - Change `audio.play('complete')` to `audio.play('restart')` in `src/UsMap.tsx:54`
   - **Validation**: Manual test confirms restart.mp3 plays when clicking "Restart Quiz"

3. **Update tests for new clip type**
   - Update `src/hooks/useAudioFeedback.test.ts` or `useAudioFeedback.test.tsx` to include 'restart' in clip type assertions
   - Add test case for restart clip playback behavior
   - **Validation**: `npm test` passes with restart clip coverage

4. **Manual testing and audio quality verification**
   - Test restart audio playback in browser
   - Verify restart.mp3 duration and quality are acceptable
   - Confirm no audio stacking when rapidly clicking restart
   - Test audio unlock on first user gesture still works
   - **Validation**: Audio plays smoothly, no overlaps, clear user feedback

## Notes
- The restart.mp3 file already exists at `public/audio/restart.mp3`
- No breaking changes to public API since only adding a new clip type
- Change is backward compatible - existing 'success', 'error', 'complete' clips unchanged
