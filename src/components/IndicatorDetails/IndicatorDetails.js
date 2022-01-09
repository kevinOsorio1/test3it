import React from 'react';
import IndicatorDetailLabel from './IndicatorDetailLabel';
import {indicatorDetailsStyles} from './IndicatorDetails.style';
import Skeleton from '../Skeleton/Skeleton';
import {Text, View} from 'react-native';
import {stringToDateFormat} from '../../utils/dateTransform';

const IndicatorDetails = ({route, indicator}) => {
  if (!indicator) {
    return <Skeleton />;
  }
  return (
    <View style={indicatorDetailsStyles.container}>
      <Text
        testID="value"
        style={
          indicatorDetailsStyles.title
        }>{`${indicator.prefix} ${indicator.serie[0].value}`}</Text>
      <IndicatorDetailLabel label={'Nombre'} text={indicator.name} />
      <IndicatorDetailLabel
        label={'Fecha'}
        text={stringToDateFormat(indicator.date)}
      />
      <IndicatorDetailLabel label={'Unidad de Medida'} text={indicator.unit} />
    </View>
  );
};

export default IndicatorDetails;
