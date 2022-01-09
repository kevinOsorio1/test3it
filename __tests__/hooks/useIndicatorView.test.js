import React from 'react';
import axios from 'axios';
import {indicator} from '../../__mocks__/indicators.mocks';
import {oneIndicatorToBO} from '../../src/utils/indicatorsTransforms';
import {act, renderHook} from '@testing-library/react-hooks';
import useIndicatorView from '../../src/utils/hooks/useIndicatorView';
import {NavigationContext} from '@react-navigation/native';

jest.mock('axios');
const navContext = {
  isFocused: option => option || false,
  // addListener returns an unscubscribe function.
  addListener: jest.fn(() => jest.fn()),
};
test('should return a indicator', async () => {
  jest.setTimeout(10000);
  const wrapper = ({children}) => (
    <NavigationContext.Provider value={navContext}>
      {children}
    </NavigationContext.Provider>
  );

  axios.get.mockResolvedValue({
    data: oneIndicatorToBO(indicator),
  });
  const {result, waitForNextUpdate} = renderHook(
    () => useIndicatorView({params: {code: 'uf'}}),
    {
      wrapper,
    },
  );
  act(async () => {
    result.current.fetchIndicatorByCode();
    await waitForNextUpdate();
  });
  console.log('indicator', result.current.indicator);
  expect(result.current.indicator).toEqual(oneIndicatorToBO(indicator));
});
