import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon'
import InputScreen from '../screens/InputScreen'
import SearchScreen from '../screens/SearchScreen'
import FavoritesScreen from '../screens/FavoritesScreen';
import MyAccountScreen from "../screens/MyAccountScreen";

export default createBottomTabNavigator({
  InputScreen: {
    screen: InputScreen,
    navigationOptions: {
      tabBarLabel: 'Input',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
      ),
    }
  },
  FavoritesScreen: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          screenProps={true}
          name={
            Platform.OS === 'ios'
              ? `ios-information-circle${focused ? '' : '-outline'}`
              : 'md-options'
          }
        />
      ),
    }
  },
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === 'ios'
              ? `ios-information-circle${focused ? '' : '-outline'}`
              : 'md-information-circle'
          }
        />
      ),
    }
  },
  MyAccountScreen: {
    screen: MyAccountScreen,
    navigationOptions: {
      tabBarLabel: 'Account',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === 'ios'
              ? `ios-information-circle${focused ? '' : '-outline'}`
              : 'md-information-circle'
          }
        />
      ),
    }
  },
});