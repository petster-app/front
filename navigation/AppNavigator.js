import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import SignIn from '../screens/SignIn'
import InputScreen from '../screens/InputScreen'
import SearchScreen from '../screens/SearchScreen'
import SignUp from "../screens/SignUp";
import PetDetails from '../components/PetDetails'
import TabNavigator from './TabNavigator';
import Loading from "../screens/loading";

import firebase from "../components/firebase";

const AppNavigator = createStackNavigator({
  HomeScreen: SignIn,
  InputScreen: InputScreen,
  SearchScreen: SearchScreen,
  SignUp: { screen: SignUp,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })},
  Loading: { screen: Loading,
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