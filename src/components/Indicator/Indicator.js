import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {Colors, IconButton, Surface} from 'react-native-paper';
import indicatorStyles from './Indicator.styles';

const Indicator = ({name, unit, clickInfo, clickItem}) => {
  return (
    <Pressable onPress={clickItem}>
      <Surface style={indicatorStyles.container}>
        <View style={indicatorStyles.content}>
          <Text
            style={indicatorStyles.name}
            numberOfLines={1}
            testID="indicator-name">
            {name}
          </Text>
          <Text style={indicatorStyles.unit} testID="indicator-unit">
            {unit}
          </Text>
        </View>
        <View style={indicatorStyles.buttons}>
          <IconButton
            testID="information-button"
            color={Colors.cyanA700}
            icon="information-outline"
            size={30}
            onPress={clickInfo}
          />
          <IconButton
            testID="item-button"
            onPress={clickItem}
            icon="chevron-right"
            size={30}
          />
        </View>
      </Surface>
    </Pressable>
  );
};

export default Indicator;
