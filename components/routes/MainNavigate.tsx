import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import Header from '../ui/Header';

const Stack = createStackNavigator();

const MainNavigate = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{header: () => <Header back={false} type="logo" />}}
        name="mainScreen"
        component={MainScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigate;
