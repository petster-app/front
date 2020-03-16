import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import firebase from "../components/firebase";
import HomeScreen from "../screens/HomeScreen";
import Icon from "react-native-vector-icons/FontAwesome";

export default function SignOut(props) {
  async function handleLogout() {
    console.log("logged out");
    await firebase.logout();
    props.navigation.navigate("HomeScreen");
  }

  return (
    <View style={styles.container}>
      <View style={styles.paw}>
        <Icon name="paw" color="rgb(239,89,68)" size={50}></Icon>
      </View>
      <Text
        style={{ fontSize: 21, fontFamily: "Nunito-bold", marginBottom: 50 }}
      >
        Hi, {firebase.getCurrentName()} !
      </Text>

      <View style={styles.button}>
        <View style={styles.buttonContent}>
          <Icon
            style={styles.icon}
            name="paw"
            color="rgb(239,89,68)"
            size={20}
          ></Icon>
          <Text>Favorites</Text>
        </View>
      </View>

      <View style={styles.button}>
        <View style={styles.buttonContent}>
          <Icon
            style={styles.icon}
            name="paw"
            color="rgb(239,89,68)"
            size={20}
          ></Icon>
          <Text>Notifications</Text>
        </View>
      </View>

      <TouchableOpacity onPress={handleLogout} style={styles.button}>
        <View style={styles.buttonContent}>
          <Icon
            style={styles.icon}
            name="paw"
            color="rgb(239,89,68)"
            size={20}
          ></Icon>
          <Text>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(248,248,248)"
  },
  paw: {
    backgroundColor: "rgb(255,255,255)",
    borderRadius: 150,
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    alignSelf: "flex-start"
  },
  button: {
    backgroundColor: "rgb(255,255,255)",
    width: 340,
    height: 50,
    borderRadius: 40,
    marginBottom: 25,
    fontSize: 14,
    justifyContent: "center",
    alignContent: "center"
  },
  buttonContent: {
    fontSize: 18,
    fontFamily: "Nunito-Bold",
    color: "white",
    alignSelf: "center",
    flexDirection: "row",
    color: "rgb(239,89,68)"
    // justifyContent: "center"
  }
});
