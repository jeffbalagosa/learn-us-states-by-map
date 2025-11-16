import React from 'react';
import { render } from '@testing-library/react';
import useAudioFeedback from './useAudioFeedback';

function TestComponent() {
  const { play } = useAudioFeedback();
  // Use `React.createElement` to avoid JSX syntax in a .ts file
  return React.createElement('div', { 'data-testid': 'hook' }, typeof play);
}

test('useAudioFeedback returns a play function', () => {
  const { getByTestId } = render(React.createElement(TestComponent));
  expect(getByTestId('hook').textContent).toBe('function');
});
