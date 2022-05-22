import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from '../components';

const Stack = createNativeStackNavigator();

const AuthStackNav = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Splash}
        options={{
          headerShown: false,
          animation: 'slide_from_right'
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNav;
