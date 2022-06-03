/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';

const myApp = () => (
  <NavigationContainer theme={DarkTheme}>
    <App />
  </NavigationContainer>
);

AppRegistry.registerComponent(appName, () => myApp);
