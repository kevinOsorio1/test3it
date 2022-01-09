import React from 'react';

import Home from '../../src/Views/Home/Home';
import {cleanup, render, waitFor} from '@testing-library/react-native';
import {allIndicators} from '../../__mocks__/indicators.mocks';
import axios from 'axios';
import {indicatorTransform} from '../../src/utils/indicatorsTransforms';
jest.mock('axios');

afterEach(cleanup);
test('should change data state from Home', async () => {
  axios.get.mockResolvedValue({
    data: indicatorTransform(allIndicators),
  });
  let {queryByTestId} = render(<Home />);
  const listNode = await waitFor(() => queryByTestId('indicator-list'));

  expect(listNode.children.length).toBe(1);
});
