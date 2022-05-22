import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStackNav from './HomeStackNav';
import AuthStackNav from './AuthStackNav';
import { Splash } from '../components';

const Stack = createNativeStackNavigator();

const RootNav = () => {
  // const navTheme = {
  //   ...DefaultTheme,
  //   colors: {
  //     ...DefaultTheme.colors,
  //     background: '#595959',

  //   },
  // };

  return (

    // <NavigationContainer theme={navTheme}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="AuthStackNav" component={AuthStackNav} />
        <Stack.Screen name="HomeStackNav" component={HomeStackNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNav;
