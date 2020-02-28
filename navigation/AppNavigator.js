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
  PetDetails: { screen: PetDetails, 
    navigationOptions: ({ navigation }) => ({
      header: null,
  })},
});

const AuthStack = createStackNavigator({
  SignIn: { screen: SignIn,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })},
    SignUp: SignUp,
})

const HomeStack = createStackNavigator({
    Tab : {screen: TabNavigator},
    App : {screen: AppNavigator},
  });

const MainStack = createSwitchNavigator({
  Auth: AuthStack,
  Home: HomeStack,
});

export default createAppContainer(MainStack);