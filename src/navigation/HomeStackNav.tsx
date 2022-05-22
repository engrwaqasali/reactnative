import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens';
const Stack = createNativeStackNavigator();

const HomeStackNav = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
};

export default HomeStackNav;