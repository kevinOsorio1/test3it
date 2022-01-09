import {useMemo} from 'react';
import {stringToDateFormat} from '../dateTransform';
export const chartConfig = {
  backgroundGradientFrom: '#08130D',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#1E2923',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 3, // optional, default 3
  barPercentage: 2,
  useShadowColorFromDataset: false, // optional
};
const useChart = indicator => {
  const data = useMemo(() => {
    if (!indicator?.serie) {
      return [];
    }
    return indicator.serie
      .slice(0, 7)
      .map(el => el.value)
      .reverse();
  }, [indicator]);

  const labels = useMemo(() => {
    if (!indicator?.serie) {
      return [];
    }
    return indicator.serie
      .slice(0, 7)
      .reduce(
        (acc, el, index) =>
          index % 2 === 0 ? [...acc, stringToDateFormat(el.date)] : acc,
        [],
      )
      .reverse();
  }, [indicator]);
  return {labels, data};
};
export default useChart;
