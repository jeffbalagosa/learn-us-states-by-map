import { createElement } from 'react';
import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import useAudioFeedback from './useAudioFeedback';
import { useEffect } from 'react';

function TestComponent() {
  const { play } = useAudioFeedback();
  // Use `createElement` to avoid JSX syntax in a .ts file
  return createElement('div', { 'data-testid': 'hook' }, typeof play);
}

test('useAudioFeedback returns a play function', () => {
  const { getByTestId } = render(createElement(TestComponent));
  expect(getByTestId('hook').textContent).toBe('function');
});

test('play restart clip does not throw', async () => {
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

  const original = (window as any).AudioContext;
  (window as any).AudioContext = MockAudioContext;

  function PlayTest() {
    const { play } = useAudioFeedback();
    useEffect(() => {
      (async () => {
        await play('restart');
      })();
    }, [play]);
    return createElement('div', { 'data-testid': 'playtest' }, 'ok');
  }

  const { getByTestId } = render(createElement(PlayTest));
  expect(getByTestId('playtest').textContent).toBe('ok');

  (window as any).AudioContext = original;
});
