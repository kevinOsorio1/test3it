import React from 'react';
import {Text, useWindowDimensions, View, StyleSheet} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import useChart, {chartConfig} from '../../utils/hooks/useChart';

const IndicatorChart = ({indicator}) => {
  const {width} = useWindowDimensions();
  const {data, labels} = useChart(indicator);

  return (
    <LineChart
      formatYLabel={yValue => `$ ${yValue}`}
      xLabelsOffset={36}
      renderDotContent={({x, y, index, indexData}) => (
        <View key={index} style={chartStyles.dotView(y, x)}>
          <Text testID={`dot-${index}`}>{indexData}</Text>
        </View>
      )}
      width={width}
      height={500}
      data={{
        labels: labels,
        datasets: [
          {
            data: data,
            color: () => 'rgba(134, 65, 244, 1)',
            strokeWidth: 2,
          },
        ],
      }}
      chartConfig={chartConfig}
    />
  );
};

export const chartStyles = StyleSheet.create({
  dotView: (y, x) => ({
    position: 'absolute',
    top: y + 8,
    left: x - 30,
    backgroundColor: 'rgba(134, 65, 244, 0.7)',
    padding: 4,
  }),
});

export default IndicatorChart;
