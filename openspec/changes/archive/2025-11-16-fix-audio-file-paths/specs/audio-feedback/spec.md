# audio-feedback Spec Delta

## MODIFIED Requirements

### Requirement: Gentle success tone on correct selections
The application MUST reward every correct state selection with a short, smooth tone so players receive immediate confirmation without harsh audio.

#### Scenario: Correct guess plays a subtle chime
- **GIVEN** the quiz is in progress and the user selects the highlighted target state
- **WHEN** the state name matches the current quiz prompt
- **THEN** a single "success" audio clip from `/audio/success.mp3` plays within 150 ms of the click
- **AND** the clip length is ≤ 750 ms with at least a 40 ms fade-in/out so it sounds smooth and not jarring

### Requirement: Soft error cue on incorrect guesses
Wrong guesses MUST trigger a muted corrective sound so players know the tap failed while keeping the experience calm.

#### Scenario: Incorrect guess plays a low-volume tone
- **GIVEN** the quiz is waiting for the correct answer
- **WHEN** a user clicks a state that does not match the prompt and the automatic hint threshold has not been reached
- **THEN** the app plays a single "error" clip from `/audio/error.mp3` that is ≤ 500 ms at no more than 40% volume
- **AND** repeating mistakes restart the clip rather than layering multiple loud sounds
