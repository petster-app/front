import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen'
import InputScreen from '../screens/InputScreen'
import SearchScreen from '../screens/SearchScreen'
import SignUp from "../screens/SignUp";
import PetDetails from '../components/PetDetails'
import TabNavigator from './TabNavigator';
import Loading from "../screens/loading";

import firebase from "../components/firebase";

const AppNavigator = createStackNavigator({
  HomeScreen: HomeScreen,
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

export default createAppContainer(
  createStackNavigator({
    Tab : {screen: TabNavigator},
    App : {screen: AppNavigator}
  }),
);


