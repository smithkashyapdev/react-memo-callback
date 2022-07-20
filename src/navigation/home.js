import React from 'react';
import HomeScreen from '../screens/Profile';
import SettingScreen from '../screens/Setting';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeNavigator = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={'Setting'} component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
