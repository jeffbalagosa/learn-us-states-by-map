# Proposal: add-restart-audio-clip

## Summary
Add dedicated restart audio clip playback when users click "Restart Quiz" button. Currently the restart action reuses the 'complete' audio, which is semantically incorrect and provides ambiguous feedback. This change introduces a separate 'restart' clip type that plays `restart.mp3` to give users clear auditory confirmation that the quiz has been reset.

## Why
The existing implementation plays the same audio for both quiz completion and quiz restart, creating confusion about whether the action represents an ending or a beginning. A distinct restart sound will:
- Provide clearer user feedback that the quiz state has been reset
- Improve the overall audio experience by semantically matching sounds to actions
- Utilize the existing `restart.mp3` file already present in `public/audio/`

## Scope
This change modifies the `audio-feedback` capability by:
- Extending the `useAudioFeedback` hook to support a new 'restart' clip type
- Updating the `restartQuiz` function to play the restart audio instead of complete
- No UI changes required
- No changes to timing, quiz logic, or other audio cues

## Dependencies
- Requires the existing `useAudioFeedback` hook implementation
- Assumes `public/audio/restart.mp3` exists and is valid

## Risks & Mitigations
- **Risk**: The restart.mp3 file might not meet quality/duration requirements
  - **Mitigation**: Test audio playback; if unsuitable, replace or trim the file
- **Risk**: Adding a new clip type could introduce breaking changes in tests
  - **Mitigation**: Update any affected tests to include the new clip type

## Related Changes
None - this is a standalone enhancement to the existing audio feedback system.
