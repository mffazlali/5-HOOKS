import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import YourOwnHooks from './YourOwnHooks';

describe('<YourOwnHooks />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<YourOwnHooks />);
    const yourOwnHooks = getByTestId('YourOwnHooks');

    expect(yourOwnHooks).toBeInTheDocument();
  });
});