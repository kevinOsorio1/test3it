import React from 'react';
import {Text, View} from 'react-native';
import {indicatorDetailsLabelStyles} from './indicatorDetailsLabel.style';
import {Surface} from 'react-native-paper';

const IndicatorDetailLabel = ({label, text}) => {
  return (
    <View style={indicatorDetailsLabelStyles.container}>
      <View testID={`indicator-${label}`}>
        <Text style={indicatorDetailsLabelStyles.label}>{label}</Text>
      </View>
      <Surface
        testID="indicator-info-text"
        style={indicatorDetailsLabelStyles.value}>
        <Text style={indicatorDetailsLabelStyles.text}>{text}</Text>
      </Surface>
    </View>
  );
};

export default IndicatorDetailLabel;
