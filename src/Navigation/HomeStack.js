import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Views/Home/Home';
import IndicatorDetailsView from '../Views/IndicatorDetailsView/IndicatorDetailsView';
import IndicatorTimeLine from '../Views/IndicatorTimeLine/IndicatorTimeLine';

const {Screen, Navigator} = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Navigator>
      <Screen
        options={{headerShown: false}}
        name="Indicadores"
        component={Home}
      />
      <Screen
        options={{headerShown: false}}
        name="Detalle"
        component={IndicatorDetailsView}
      />
      <Screen
        options={{headerShown: false}}
        name="TimeLine"
        component={IndicatorTimeLine}
      />
    </Navigator>
  );
};

export default HomeStack;
