# audio-feedback Specification

## Purpose
TBD - created by archiving change add-audio-feedback. Update Purpose after archive.
## Requirements
### Requirement: Gentle success tone on correct selections
The application MUST reward every correct state selection with a short, smooth tone so players receive immediate confirmation without harsh audio.

#### Scenario: Correct guess plays a subtle chime
- **GIVEN** the quiz is in progress and the user selects the highlighted target state
- **WHEN** the state name matches the current quiz prompt
- **THEN** a single "success" audio clip plays within 150 ms of the click
- **AND** the clip length is = 750 ms with at least a 40 ms fade-in/out so it sounds smooth and not jarring

### Requirement: Soft error cue on incorrect guesses
Wrong guesses MUST trigger a muted corrective sound so players know the tap failed while keeping the experience calm.

#### Scenario: Incorrect guess plays a low-volume tone
- **GIVEN** the quiz is waiting for the correct answer
- **WHEN** a user clicks a state that does not match the prompt and the automatic hint threshold has not been reached
- **THEN** the app plays a single "error" clip = 500 ms at no more than 40% volume
- **AND** repeating mistakes restart the clip rather than layering multiple loud sounds

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

### Requirement: Audio playback remains smooth under rapid interactions
Audio logic MUST preload assets and gate playback so cues do not pop, stack, or stall even when players click quickly or browsers require a user gesture to unlock audio.

#### Scenario: Rapid guesses do not stack loud sounds
- **GIVEN** a user makes multiple guesses in under one second
- **WHEN** a new cue fires before the prior clip ends
- **THEN** the audio controller stops or cross-fades the previous clip before starting the new one so only a single smooth sound is heard

#### Scenario: Audio unlock follows the first gesture
- **GIVEN** the browser defers autoplay until a user action
- **WHEN** the quiz receives the first tap or click
- **THEN** the audio controller primes the clips without emitting noise, ensuring subsequent cues play immediately and smoothly

### Requirement: Restart audio clip support
The audio feedback system MUST support a dedicated 'restart' clip type that plays when users reset the quiz.

#### Scenario: Audio hook supports restart clip type
- **GIVEN** the useAudioFeedback hook is initialized
- **WHEN** the hook's play method is called with 'restart' as the clip name
- **THEN** the hook loads and plays `/audio/restart.mp3`
- **AND** the clip follows the same preloading and playback smoothness requirements as other clip types
- **AND** overlapping restart playback is prevented (only one restart sound plays at a time)

