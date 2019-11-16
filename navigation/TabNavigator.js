import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import InputScreen from '../screens/InputScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

export default createAppContainer(
  createBottomTabNavigator({
    HomeScreen: HomeScreen,
    InputScreen: InputScreen,
    FavoritesScreen: FavoritesScreen,
  }),
);