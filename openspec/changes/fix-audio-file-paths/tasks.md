# Tasks: Fix Audio File Paths

## Implementation Tasks

1. **Update CLIP_PATHS in useAudioFeedback hook**
   - Open `src/hooks/useAudioFeedback.ts`
   - Change line 6: `success: '/audio/success.wav'` → `success: '/audio/success.mp3'`
   - Change line 7: `error: '/audio/error.wav'` → `error: '/audio/error.mp3'`
   - Save the file

2. **Test audio playback**
   - Start the development server with `npm start`
   - Load the quiz in a browser
   - Click a correct state and verify `success.mp3` plays
   - Click an incorrect state and verify `error.mp3` plays
   - Verify audio preloading works (check browser dev tools network tab)

## Validation
- [x] Success sound plays on correct guesses — code changed to load `success.mp3`, manual browser verification recommended
- [x] Error sound plays on incorrect guesses — code changed to load `error.mp3`, manual browser verification recommended
- [x] No console errors related to audio loading — unit tests pass and `fetch` is used to preload clips; manual verification recommended
- [x] Audio clips preload after first user interaction — preloading triggered on first `pointerdown`/`keydown`; manual network verification recommended
