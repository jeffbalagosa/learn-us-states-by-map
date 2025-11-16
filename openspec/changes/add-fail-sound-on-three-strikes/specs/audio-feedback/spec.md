# audio-feedback Specification Deltas

## ADDED Requirements

### Requirement: Failure audio cue on three-strike threshold
The quiz MUST play a distinct fail sound when the three-strike threshold is reached and the correct answer is automatically highlighted, so players understand this is a failure event rather than a success.

#### Scenario: Three incorrect guesses trigger fail sound
- **GIVEN** the player has made two incorrect guesses for the current state
- **WHEN** the player makes a third incorrect guess and reaches the automatic hint threshold
- **THEN** the app plays the "fail" audio clip using `public/audio/fail-trumpet.mp3`
- **AND** the fail sound is distinct from the completion sound to clearly signal a failure event rather than success
- **AND** the state is automatically highlighted as part of the hint mechanism

#### Scenario: Fail clip loads with other audio assets
- **GIVEN** the audio feedback hook is initialized
- **WHEN** the first user interaction triggers audio preloading
- **THEN** the fail clip at `/audio/fail-trumpet.mp3` is preloaded along with other audio clips
- **AND** the fail clip follows the same preloading and playback smoothness requirements as other clip types
- **AND** overlapping fail playback is prevented (only one fail sound plays at a time)
