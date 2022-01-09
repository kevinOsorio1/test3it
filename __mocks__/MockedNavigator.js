import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IndicatorDetailsView from '../src/Views/IndicatorDetailsView/IndicatorDetailsView';
import IndicatorTimeLine from '../src/Views/IndicatorTimeLine/IndicatorTimeLine';

const {Screen, Navigator} = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MockedHomeStack = component => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={component} />
      <Stack.Screen name="Detalle" component={IndicatorDetailsView} />
      <Stack.Screen name="TimeLine" component={IndicatorTimeLine} />
    </Stack.Navigator>
  );
};

const MockedNavigator = ({component, params = {}}) => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="MockedScreen"
          component={() => MockedHomeStack(component)}
          initialParams={params}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default MockedNavigator;
