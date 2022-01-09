import React from 'react';
import {render} from '@testing-library/react-native';
import TimeLineItem from '../../src/components/TimeLineItem/TimeLineItem';
import {oneIndicatorToBO} from '../../src/utils/indicatorsTransforms';
import {indicator} from '../../__mocks__/indicators.mocks';

test('should show detailTimeline', () => {
  const data = oneIndicatorToBO(indicator);
  const item = data.serie[0];
  const rendered = render(
    <TimeLineItem prefix={data.prefix} value={item.value} date={item.date} />,
  );
  expect(rendered.getByTestId('value')._fiber.child.memoizedProps).toBe(
    `${data.prefix} ${item.value}`,
  );
});
