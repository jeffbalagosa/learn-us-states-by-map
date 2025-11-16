import React from 'react';
import { render } from '@testing-library/react';
import useAudioFeedback from './useAudioFeedback';
import { useEffect } from 'react';

function TestComponent() {
  const { play } = useAudioFeedback();
  return <div data-testid="hook">{typeof play}</div>;
}

test('useAudioFeedback returns a play function', () => {
  const { getByTestId } = render(<TestComponent />);
  expect(getByTestId('hook').textContent).toBe('function');
});

test('play restart clip does not throw', async () => {
  // minimal mock for AudioContext and oscillator/gain so play('restart') uses fallback
  class MockAudioContext {
    state = 'running';
    currentTime = 0;
    destination = {} as any;
    resume() { return Promise.resolve(); }
    createGain() { return { gain: { value: 0, setValueAtTime() {}, exponentialRampToValueAtTime() {} }, connect() { return this; }, disconnect() {} } as any }
    createBufferSource() { return { buffer: null, connect() { return this; }, start() {}, onended: null, disconnect() {} } as any }
    createOscillator() { return { frequency: { value: 0 }, type: 'sine', connect() { return this; }, start() {}, stop() {}, disconnect() {} } as any }
    async decodeAudioData() { return Promise.resolve({} as any) }
  }

  // attach mock
  const original = (window as any).AudioContext;
  (window as any).AudioContext = MockAudioContext;

  function PlayTest() {
    const { play } = useAudioFeedback();
    useEffect(() => {
      (async () => {
        await play('restart');
      })();
    }, [play]);
    return <div data-testid="playtest">ok</div>;
  }

  const { getByTestId } = render(<PlayTest />);
  expect(getByTestId('playtest')).toHaveTextContent('ok');

  // restore
  (window as any).AudioContext = original;
});
