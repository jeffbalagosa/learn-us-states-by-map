import { createElement } from 'react';
import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import useAudioFeedback from './useAudioFeedback';

function TestComponent() {
  const { play } = useAudioFeedback();
  // Use `createElement` to avoid JSX syntax in a .ts file
  return createElement('div', { 'data-testid': 'hook' }, typeof play);
}

test('useAudioFeedback returns a play function', () => {
  const { getByTestId } = render(createElement(TestComponent));
  expect(getByTestId('hook').textContent).toBe('function');
});
