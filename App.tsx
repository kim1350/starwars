/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigate from './components/routes/MainNavigate';
import {Provider} from 'react-redux';
import store from './store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigate />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
