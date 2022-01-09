import React from 'react';
import {Text, View} from 'react-native';
import {Surface} from 'react-native-paper';
import {stringToDateFormat} from '../../utils/dateTransform';
import {timeLineItemStyle} from './timeLineItem.style';

const TimeLineItem = ({date, value, prefix}) => {
  return (
    <Surface style={timeLineItemStyle.container}>
      <View style={timeLineItemStyle.dateContainer}>
        <Text style={timeLineItemStyle.date}>{stringToDateFormat(date)}</Text>
      </View>
      <View style={timeLineItemStyle.valueContainer}>
        <Text
          style={timeLineItemStyle.value}
          testID="value">{`${prefix} ${value}`}</Text>
      </View>
    </Surface>
  );
};

export default TimeLineItem;
