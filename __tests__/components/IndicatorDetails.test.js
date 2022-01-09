import {render} from '@testing-library/react-native';
import React from 'react';
import IndicatorDetails from '../../src/components/IndicatorDetails/IndicatorDetails';
import {oneIndicatorToBO} from '../../src/utils/indicatorsTransforms';
import {indicator} from '../../__mocks__/indicators.mocks';

test('should show skeleton', () => {
  const rendered = render(<IndicatorDetails />);
  expect(rendered.queryAllByTestId('skeleton').length).toBe(1);
});
test('should show details', () => {
  const data = oneIndicatorToBO(indicator);
  const rendered = render(<IndicatorDetails indicator={data} />);

  expect(rendered.getByTestId('value')._fiber.child.memoizedProps).toBe(
    `${data.prefix} ${data.serie[0].value}`,
  );
});
