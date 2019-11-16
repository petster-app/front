import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen'
import InputScreen from '../screens/InputScreen'
import SearchScreen from '../screens/SearchScreen'
import FavoritesScreen from '../screens/FavoritesScreen';
import TabNavigator from './TabNavigator';

const AppNavigator = createStackNavigator({
  HomeScreen: HomeScreen,
  InputScreen: InputScreen,
  SearchScreen: SearchScreen,
});

export default createAppContainer(
  createStackNavigator({
    Tab : {screen: TabNavigator},
    App : {screen: AppNavigator}
  }),
);


