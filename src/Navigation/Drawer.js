import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './HomeStack';

const {Screen, Navigator} = createDrawerNavigator();

export default function Drawer() {
  return (
    <Navigator initialRouteName="IndicadoresDrawer">
      <Screen
        name="IndicadoresDrawer"
        options={{title: 'Indicadores'}}
        component={HomeStack}
      />
    </Navigator>
  );
}
