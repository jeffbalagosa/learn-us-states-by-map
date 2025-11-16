import React from 'react';
import { render } from '@testing-library/react';
import useAudioFeedback from './useAudioFeedback';

function TestComponent() {
  const { play } = useAudioFeedback();
  return <div data-testid="hook">{typeof play}</div>;
}

test('useAudioFeedback returns a play function', () => {
  const { getByTestId } = render(<TestComponent />);
  expect(getByTestId('hook').textContent).toBe('function');
});
