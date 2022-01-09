import React from 'react';
import {render} from '@testing-library/react-native';
import TimeLine from '../../src/containers/TimeLine/TimeLine';
import {oneIndicatorToBO} from '../../src/utils/indicatorsTransforms';
import {indicator} from '../../__mocks__/indicators.mocks';

test('should render items', () => {
  const data = oneIndicatorToBO(indicator);
  const rendered = render(<TimeLine data={data.serie} prefix={data.prefix} />);
  expect(rendered.queryAllByTestId('value').length).toBe(2);
});
