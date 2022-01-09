import {render} from '@testing-library/react-native';
import React from 'react';
import Indicator from '../../src/components/Indicator/Indicator';

test('should show info correctly', async () => {
  const props = {
    name: 'Euro',
    unit: 'Pesos',
  };
  const {queryByTestId} = render(<Indicator {...props} />);
  await expect(queryByTestId('indicator-name').children[0]).toBe(props.name);
  await expect(queryByTestId('indicator-unit').children[0]).toBe(props.unit);
});
