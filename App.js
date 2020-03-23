import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import createStore from "./store";

const store = createStore();

import AppNavigator from "./navigation/AppNavigator";

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require("./assets/images/robot-dev.png"),
      require("./assets/images/robot-prod.png")
    ]),
    Font.loadAsync({
      ...Ionicons.font,
      "AmaticSC-Regular": require("./assets/fonts/AmaticSC-Regular.ttf"),
      "AmaticSC-Bold": require("./assets/fonts/AmaticSC-Bold.ttf"),
      Nunito: require("./assets/fonts/Nunito-Regular.ttf"),
      "Nunito-Light": require("./assets/fonts/Nunito-ExtraLight.ttf"),
      "Nunito-Bold": require("./assets/fonts/Nunito-SemiBold.ttf"),
      "Nunito-ExtraBold": require("./assets/fonts/Nunito-ExtraBold.ttf")
    })
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003366"
  }
});
