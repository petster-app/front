import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import firebase from "../components/firebase";
import HomeScreen from "../screens/HomeScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import IconOcticons from "react-native-vector-icons/Octicons";

export default function SignOut(props) {
  async function handleLogout() {
    console.log("logged out");
    await firebase.logout();
    props.navigation.navigate("HomeScreen");
  }

  return (
    <View style={styles.container}>
      <IconOcticons
        name="person"
        color="rgb(239,89,68)"
        size={50}
        style={{ marginTop: 30, marginBottom: 50 }}
      ></IconOcticons>
      <View style={styles.paw}>
        <Icon name="paw" color="rgb(239,89,68)" size={50}></Icon>
      </View>
      <Text
        style={{
          fontSize: 21,
          fontFamily: "Nunito-Bold",
          marginBottom: 50,
          marginTop: 10
        }}
      >
        Hi,{" "}
        <Text style={{ textTransform: "capitalize" }}>
          {firebase.getCurrentName().toUpperCase()}
        </Text>{" "}
        !
      </Text>

      <View style={styles.button}>
        <View style={styles.buttonContent}>
          <Icon
            style={styles.icon}
            name="paw"
            color="rgb(239,89,68)"
            size={20}
          ></Icon>
          <Text style={styles.text}>Favorites</Text>
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
          <Text style={styles.text}>Notifications</Text>
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
          <Text style={styles.text}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
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
    alignSelf: "flex-start",
    justifyContent: "flex-start"
  },
  button: {
    backgroundColor: "rgb(255,255,255)",

    width: 340,
    height: 50,
    borderRadius: 40,
    marginBottom: 30,
    fontSize: 14,
    justifyContent: "center",
    alignContent: "center"
  },
  text: {
    color: "rgb(239,89,68)",
    fontSize: 14,
    fontFamily: "Nunito-Bold",
    alignSelf: "center",
    textAlign: "center"
  },
  buttonContent: {
    color: "white",
    // alignSelf: "",
    flexDirection: "row",
    justifyContent: "center"
  }
});
