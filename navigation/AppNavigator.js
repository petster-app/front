import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import SignIn from "../screens/SignIn";
import InputScreen from "../screens/InputScreen";
import SearchScreen from "../screens/SearchScreen";
import SignUp from "../screens/SignUp";
import MyAccountScreen from "../screens/MyAccountScreen";
import PetDetails from "../screens/PetDetails";
import HomeScreen from "../screens/HomeScreen";
import TabNavigator from "./TabNavigator";

const AppNavigator = createStackNavigator({
  MyAccountScreen: {
    screen: MyAccountScreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  InputScreen: {
    screen: InputScreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  PetDetails: {
    screen: PetDetails,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});

const AuthStack = createStackNavigator({
  HomeScreen: HomeScreen,
  SignIn: SignIn,
  SignUp: SignUp
});

const HomeStack = createStackNavigator({
  // Tab: { screen: TabNavigator },
  App: { screen: AppNavigator }
});

const MainStack = createSwitchNavigator({
  Auth: AuthStack,
  Home: HomeStack
});

export default createAppContainer(MainStack);
