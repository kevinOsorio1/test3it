import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';
import React from 'react';
import HomeStack from '../../src/Navigation/HomeStack';

test('should render stack', () => {
  const {toJSON} = render(
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>,
  );
  expect(toJSON).toMatchSnapshot();
});
