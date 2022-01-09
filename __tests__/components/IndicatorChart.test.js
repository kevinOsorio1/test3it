import React from 'react';
import {render} from '@testing-library/react-native';
import {indicator} from '../../__mocks__/indicators.mocks';
import {oneIndicatorToBO} from '../../src/utils/indicatorsTransforms';
import IndicatorChart from '../../src/containers/IndicatorChart/IndicatorChart';

test('should show indicator chart', () => {
  const rendered = render(<IndicatorChart />);
  expect(rendered.toJSON).toMatchSnapshot();
});
test('should give correct style', () => {
  const data = oneIndicatorToBO(indicator);
  const rendered = render(<IndicatorChart indicator={data} />);
  expect(rendered.toJSON).toMatchSnapshot();
});
