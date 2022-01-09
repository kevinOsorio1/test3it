import React from 'react';
import {render} from '@testing-library/react-native';
import IndicatorTimeLine from '../../src/Views/IndicatorTimeLine/IndicatorTimeLine';
import {NavigationContext} from '@react-navigation/native';
const navContext = {
  isFocused: () => true,
  // addListener returns an unscubscribe function.
  addListener: jest.fn(() => jest.fn()),
};
test('should show indicatorTimeLine', () => {
  const {toJSON} = render(
    <NavigationContext.Provider value={navContext}>
      <IndicatorTimeLine route={{params: {code: 'code', name: 'name'}}} />,
    </NavigationContext.Provider>,
  );
  expect(toJSON).toMatchSnapshot();
});
