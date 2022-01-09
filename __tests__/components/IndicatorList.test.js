import React from 'react';
import {render} from '@testing-library/react-native';
import IndicatorList from '../../src/components/IndicatorList/IndicatorList';
import {indicatorTransform} from '../../src/utils/indicatorsTransforms';
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

test('should show a list of indicators', async () => {
  const indicators = {
    version: '1.7.0',
    autor: 'mindicador.cl',
    fecha: '2022-01-08T17:00:00.000Z',
    uf: {
      codigo: 'uf',
      nombre: 'Unidad de fomento (UF)',
      unidad_medida: 'Pesos',
      fecha: '2022-01-08T03:00:00.000Z',
      valor: 31031.66,
    },
    ivp: {
      codigo: 'ivp',
      nombre: 'Indice de valor promedio (IVP)',
      unidad_medida: 'Pesos',
      fecha: '2022-01-08T03:00:00.000Z',
      valor: 31812.04,
    },
    dolar: {
      codigo: 'dolar',
      nombre: 'Dólar observado',
      unidad_medida: 'Pesos',
      fecha: '2022-01-07T03:00:00.000Z',
      valor: 838.88,
    },
  };
  const props = {
    data: indicatorTransform(indicators),
  };
  const {queryAllByTestId} = render(<IndicatorList {...props} />);
  await expect(queryAllByTestId('indicator-name').length).toBe(3);
});
