//import React from 'react';
import { /*describe,*/ expect,/* jest,*/ test } from '@jest/globals';
import App from '../src/App';
import { render } from '@testing-library/react';

test.skip('NameConsumer shows default value', () => {
    const AppPage = render(<App />);
    expect(AppPage).toBeDefined();
})

export { }