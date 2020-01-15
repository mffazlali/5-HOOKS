import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import stateHook from './stateHook';

describe('<stateHook />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<stateHook />);
    const stateHook = getByTestId('stateHook');

    expect(stateHook).toBeInTheDocument();
  });
});