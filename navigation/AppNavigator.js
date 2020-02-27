import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import SignIn from '../screens/SignIn'
import InputScreen from '../screens/InputScreen'
import SearchScreen from '../screens/SearchScreen'
import SignUp from "../screens/SignUp";
import MyAccountScreen from "../screens/MyAccountScreen";
import PetDetails from '../components/PetDetails'
import TabNavigator from './TabNavigator';

const AppNavigator = createStackNavigator({
  MyAccountScreen: MyAccountScreen,
  InputScreen: InputScreen,
  SearchScreen: SearchScreen,
  SignIn: { screen: SignIn,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })},
  SignUp: { screen: SignUp,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })},
  PetDetails: { screen: PetDetails, 
    navigationOptions: ({ navigation }) => ({
      header: null,
  })},
});

const homeStack = createStackNavigator({
    Tab : {screen: TabNavigator},
    App : {screen: AppNavigator},
  });

const MainStack = createSwitchNavigator({
  Auth: SignIn,
  Home: homeStack,
});

export default createAppContainer(MainStack);