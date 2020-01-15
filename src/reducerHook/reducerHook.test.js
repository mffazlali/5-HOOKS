import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import reducerHook from './reducerHook';

describe('<reducerHook />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<reducerHook />);
    const reducerHook = getByTestId('reducerHook');

    expect(reducerHook).toBeInTheDocument();
  });
});