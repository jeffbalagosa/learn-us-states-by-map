Please add short, gentle audio clips here to enable audio feedback:

- `success.wav` — short positive chime.
- `error.wav` — short, soft negative tone.
- `complete.wav` — short completion/hint sound.
- `restart.mp3` — short audio to indicate the quiz has been restarted (semantic restart cue)

Files should be < 1s each and normalized so they are not loud when played at max volume 0.4.

If these files are not present, the app will use a small oscillator-based fallback tone for each event. The project owner has elected to keep this synthesized fallback as the default behaviour — adding real audio files is optional and supported.
