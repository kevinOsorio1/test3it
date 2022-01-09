import axios from 'axios';
import {
  findAllIndicators,
  findOneIndicatorByName,
} from '../../src/API/Repository/Indicators';
import {
  indicatorTransform,
  oneIndicatorToBO,
} from '../../src/utils/indicatorsTransforms';
import {allIndicators, indicator} from '../../__mocks__/indicators.mocks';

// Notice how `create` was not being mocked here...
jest.mock('axios');
test('get all indicators', async () => {
  const payload = {data: allIndicators};
  // Now mock axios get method
  axios.get = jest.fn().mockResolvedValue(payload);
  await expect(findAllIndicators()).resolves.toEqual(
    indicatorTransform(allIndicators),
  );
});

test('get one indicator', async () => {
  const payload = {data: indicator};
  // Now mock axios get method
  axios.get = jest.fn().mockResolvedValue(payload);
  await expect(findOneIndicatorByName('uf')).resolves.toEqual(
    oneIndicatorToBO(indicator),
  );
});
test('should catch error indicator', async () => {
  axios.get = jest.fn().mockRejectedValue({data: {}});
  await expect(findOneIndicatorByName()).resolves.toEqual({});
});
test('should catch error indicators', async () => {
  axios.get = jest.fn().mockRejectedValue({data: {}});
  await expect(findAllIndicators()).resolves.toEqual({});
});
