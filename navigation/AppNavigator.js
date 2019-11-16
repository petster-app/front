import React from 'react';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen'
import InputScreen from '../screens/InputScreen'
import SearchScreen from '../screens/SearchScreen'
import FavoritesScreen from '../screens/FavoritesScreen';;

const TabNavigator = createBottomTabNavigator({
  HomeScreen: HomeScreen,
  InputScreen: InputScreen,
  FavoritesScreen: FavoritesScreen,
  SearchScreen: SearchScreen,
});

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


