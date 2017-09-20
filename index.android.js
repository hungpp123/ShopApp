/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Home from "./src/components/App.js";
export default App = StackNavigator({
  Home: { screen: Home },
}, {
  headerMode: 'none'
});








AppRegistry.registerComponent('App', () => App);
