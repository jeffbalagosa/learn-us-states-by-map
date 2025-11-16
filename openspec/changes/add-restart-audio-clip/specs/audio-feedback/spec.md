# audio-feedback Specification Delta

## MODIFIED Requirements

### Requirement: Ambient cues for hints and completion
The quiz MUST provide distinct yet gentle audio when it auto-reveals a state or when the entire quiz ends/restarts so the player hears session boundaries.

#### Scenario: Automatic hint triggers a neutral cue
- **GIVEN** the player has reached the 3-error hint threshold
- **WHEN** the quiz reveals the state name automatically
- **THEN** a neutral shimmer-style audio clip ≤ 600 ms plays once without abrupt attack or decay

#### Scenario: Quiz completion plays a soft celebration
- **GIVEN** the player finishes the final state
- **WHEN** the completion banner appears
- **THEN** a celebratory clip ≤ 1.5 s fades in/out smoothly to signal the transition without being jarring

#### Scenario: Restart Quiz plays a distinct reset cue
- **GIVEN** the player clicks the "Restart Quiz" button at any time
- **WHEN** the restart action triggers and resets the quiz state
- **THEN** a dedicated "restart" audio clip plays using `/audio/restart.mp3`
- **AND** the clip provides clear auditory confirmation that the quiz has been reset
- **AND** the restart sound is distinct from the completion sound to avoid confusion

## ADDED Requirements

### Requirement: Restart audio clip support
The audio feedback system MUST support a dedicated 'restart' clip type that plays when users reset the quiz.

#### Scenario: Audio hook supports restart clip type
- **GIVEN** the useAudioFeedback hook is initialized
- **WHEN** the hook's play method is called with 'restart' as the clip name
- **THEN** the hook loads and plays `/audio/restart.mp3`
- **AND** the clip follows the same preloading and playback smoothness requirements as other clip types
- **AND** overlapping restart playback is prevented (only one restart sound plays at a time)
