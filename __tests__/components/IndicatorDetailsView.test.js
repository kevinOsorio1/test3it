import React from 'react';
import {render} from '@testing-library/react-native';
import IndicatorDetailsView from '../../src/Views/IndicatorDetailsView/IndicatorDetailsView';
import {NavigationContext} from '@react-navigation/native';

const navContext = {
  isFocused: () => true,
  // addListener returns an unscubscribe function.
  addListener: jest.fn(() => jest.fn()),
};
test('should render view', () => {
  const {toJSON} = render(
    <NavigationContext.Provider value={navContext}>
      <IndicatorDetailsView route={{params: {code: 'code', name: 'name'}}} />
    </NavigationContext.Provider>,
  );
  expect(toJSON).toMatchSnapshot();
});
