import { useCallback, useEffect, useRef } from 'react';

type ClipName = 'success' | 'error' | 'complete' | 'restart' | 'fail';

const CLIP_PATHS: Record<ClipName, string> = {
  success: '/audio/success.wav',
  error: '/audio/error.wav',
  complete: '/audio/complete.wav',
  restart: '/audio/restart.mp3',
  fail: '/audio/fail-trumpet.mp3',
};

const MAX_VOLUME = 0.4;

export default function useAudioFeedback() {
  const audioContextRef = useRef<AudioContext | null>(null);
  const buffersRef = useRef<Record<ClipName, AudioBuffer | null>>({
    success: null,
    error: null,
    complete: null,
    restart: null,
    fail: null,
  });
  const playingRef = useRef<Record<ClipName, boolean>>({ success: false, error: false, complete: false, restart: false, fail: false });

  // Create/reuse audio context on first user gesture
  const ensureAudioContext = useCallback(async () => {
    if (!audioContextRef.current) {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      try {
        if (ctx.state === 'suspended') {
          await ctx.resume();
        }
      } catch (err) {
        // ignore
      }
      audioContextRef.current = ctx;
    }
    return audioContextRef.current;
  }, []);

  // try to preload audio clip via fetch + decodeAudioData
  const preloadClip = useCallback(async (name: ClipName) => {
    try {
      const ctx = await ensureAudioContext();
      if (!ctx) return;
      const path = CLIP_PATHS[name];
      const res = await fetch(path);
      if (!res.ok) throw new Error('fetch failed');
      const arrayBuffer = await res.arrayBuffer();
      const decoded = await ctx.decodeAudioData(arrayBuffer.slice(0));
      buffersRef.current[name] = decoded;
    } catch (e) {
      // fallback — leave buffer null so play can fall back to oscillator
      buffersRef.current[name] = null;
    }
  }, [ensureAudioContext]);

  // Preload all clips after first interaction
  useEffect(() => {
    const onFirstInteraction = () => {
      // remove listener
      window.removeEventListener('pointerdown', onFirstInteraction);
      window.removeEventListener('keydown', onFirstInteraction);
      // kick off preload but don't await
      preloadClip('success');
      preloadClip('error');
      preloadClip('complete');
      preloadClip('restart');
      preloadClip('fail');
    };

    window.addEventListener('pointerdown', onFirstInteraction);
    window.addEventListener('keydown', onFirstInteraction);

    return () => {
      window.removeEventListener('pointerdown', onFirstInteraction);
      window.removeEventListener('keydown', onFirstInteraction);
    };
  }, [preloadClip]);

  const play = useCallback(
    async (name: ClipName) => {
      const ctx = await ensureAudioContext();
      if (!ctx) return;

      if (playingRef.current[name]) {
        // skip overlapping playback for the same clip
        return;
      }
      playingRef.current[name] = true;

      try {
        const buffer = buffersRef.current[name];
        if (buffer) {
          const gain = ctx.createGain();
          gain.gain.value = Math.min(MAX_VOLUME, 0.4);
          const src = ctx.createBufferSource();
          src.buffer = buffer;
          src.connect(gain).connect(ctx.destination);
          src.start();
          src.onended = () => {
            playingRef.current[name] = false;
            // disconnect to let GC
            src.disconnect();
            gain.disconnect();
          };
          } else {
          // fallback: simple oscillator burst
          const d = 0.35; // duration
          const gain = ctx.createGain();
          gain.gain.value = Math.min(0.4, MAX_VOLUME);
          gain.gain.setValueAtTime(gain.gain.value, ctx.currentTime);
          const osc = ctx.createOscillator();
          // choose pleasant frequency based on type
          if (name === 'success') {
            osc.frequency.value = 880;
            osc.type = 'sine';
          } else if (name === 'error') {
            osc.frequency.value = 220;
            osc.type = 'sine';
          } else if (name === 'fail') {
            // distinctive 'trumpet' fallback — sawtooth + mid frequency
            osc.frequency.value = 330;
            osc.type = 'sawtooth';
          } else if (name === 'restart') {
            // distinct reset cue from complete
            osc.frequency.value = 660;
            osc.type = 'sine';
          } else {
            osc.frequency.value = 440;
            osc.type = 'triangle';
          }
          osc.connect(gain).connect(ctx.destination);
          osc.start();
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + d);
          setTimeout(() => {
            try {
              osc.stop();
            } catch (e) {}
            try {
              osc.disconnect();
              gain.disconnect();
            } catch (e) {}
            playingRef.current[name] = false;
          }, d * 1000 + 50);
        }
      } catch (e) {
        // silence on error
        playingRef.current[name] = false;
      }
    },
    [ensureAudioContext]
  );

  return { play };
}
