/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigate from './components/routes/MainNavigate';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MainNavigate />
    </NavigationContainer>
  );
}

export default App;
