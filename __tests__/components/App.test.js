import {render} from '@testing-library/react-native';
import React from 'react';
import App from '../../App';

test('should render app.js', () => {
  const rendered = render(<App />);
  expect(rendered).toBeTruthy();
});
