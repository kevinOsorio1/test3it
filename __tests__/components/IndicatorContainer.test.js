import {render} from '@testing-library/react-native';
import React from 'react';
import IndicatorContainer from '../../src/containers/IndicatorContainer/IndicatorContainer';

test('should render IndicatorContainer', () => {
  const rendered = render(<IndicatorContainer />);
  expect(rendered.getByTestId('skeleton')).toBeTruthy();
});
