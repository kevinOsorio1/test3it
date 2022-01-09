import {act, renderHook} from '@testing-library/react-hooks';
import {allIndicators} from '../../__mocks__/indicators.mocks';
import axios from 'axios';
import {useHomeView} from '../../src/utils/hooks/useHomeView';
import {indicatorTransform} from '../../src/utils/indicatorsTransforms';

jest.mock('axios');

test('should test data', async () => {
  axios.get.mockResolvedValueOnce({data: indicatorTransform(allIndicators)});
  const {result, waitForNextUpdate} = renderHook(() => useHomeView());
  expect(result.current.indicators).toBe(null);
  await act(async () => {
    result.current.fetchIndicators();
    await waitForNextUpdate();
  });
  expect(result.current.indicators.length).toEqual(
    indicatorTransform(allIndicators).length,
  );

  act(() => result.current.eraseIndicators());
  expect(result.current.indicators).toBe(null);
});
