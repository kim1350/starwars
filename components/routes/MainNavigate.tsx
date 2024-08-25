import React from 'react';

import HomeScreen from '../screens/HomeScreen';
import CharactersScreen from '../screens/CharactersScreen';
import Header from '../ui/Header';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const MainNavigate = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: () => <Header back={false} type="logo" rightAction />,
        drawerPosition: 'right',
      }}
      initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Characters" component={CharactersScreen} />
    </Drawer.Navigator>
  );
};

export default MainNavigate;
