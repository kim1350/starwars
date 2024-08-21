import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';

const Stack = createStackNavigator();

const MainNavigate = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="mainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigate;
