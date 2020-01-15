import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import effectHook from './effectHook';

describe('<effectHook />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<effectHook />);
    const effectHook = getByTestId('effectHook');

    expect(effectHook).toBeInTheDocument();
  });
});