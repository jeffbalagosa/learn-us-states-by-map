# Proposal: Fix Audio File Paths

**Status**: draft
**Author**: AI Assistant
**Created**: 2025-11-16

## Summary
Update the `useAudioFeedback` hook to use the correct `.mp3` file paths for success and error audio clips instead of the incorrect `.wav` paths currently specified.

## Problem
The user has provided `error.mp3` and `success.mp3` in `public/audio/`, but the `useAudioFeedback.ts` hook is configured to load `error.wav` and `success.wav`, causing the audio clips not to play. The implementation already calls `audio.play('error')` and `audio.play('success')` at the appropriate times, but the files cannot be loaded due to the path mismatch.

## Solution
Change the `CLIP_PATHS` record in `src/hooks/useAudioFeedback.ts` from:
```typescript
success: '/audio/success.wav',
error: '/audio/error.wav',
```

to:
```typescript
success: '/audio/success.mp3',
error: '/audio/error.mp3',
```

This is a simple bug fix that aligns the code with the actual audio files present in the repository.

## Scope
- **Files affected**: `src/hooks/useAudioFeedback.ts` (lines 6-7)
- **Testing**: Manual verification that success and error sounds play correctly
- **No new requirements**: This fixes existing functionality to work as already specified

## Relationship to Existing Specs
This change **MODIFIES** the existing `audio-feedback` spec by correcting the implementation to match the actual file format. The requirements remain unchanged—success and error clips should play at the appropriate times—but the technical implementation detail (file extension) is corrected.

## Spec Deltas
- `audio-feedback`: Update implementation details to reflect `.mp3` format instead of `.wav`
