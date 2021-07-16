// @flow

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NAVIGATION} from './navigation/constants';
import {SplashScreen} from './navigation/screens/SplashScreen';

const Stack = createStackNavigator();

export function App(): React.ReactNode {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NAVIGATION.ROUTES.SPLASH}>
        <Stack.Screen
          name={NAVIGATION.ROUTES.SPLASH}
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
