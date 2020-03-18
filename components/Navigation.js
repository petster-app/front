import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconOcticons from "react-native-vector-icons/Octicons";
import SignUp from "../screens/SignUp";
import InputScreen from "../screens/InputScreen";
import { withNavigation } from "react-navigation";

function Navigation(props) {
  function handleFilterClick() {
    console.log("handle filter");
    props.navigation.navigate("InputScreen");
  }

  function handleAccountClick() {
    console.log("hanlde account");
    props.navigation.navigate("MyAccountScreen");
  }
  return (
    <>
      <View style={styles.navContainer}>
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-between",
            width: 350
          }}
        >
          <TouchableOpacity onPress={handleAccountClick}>
            <IconOcticons
              name="person"
              color="rgb(169,169,169)"
              size={50}
            ></IconOcticons>
          </TouchableOpacity>

          <View style={styles.headerTitle}>
            <Icon name="paw" color="rgb(239,89,68)" size={40}></Icon>
            <Text style={[styles.text, styles.headerText]}>PETSTER</Text>
          </View>

          <TouchableOpacity onPress={handleFilterClick}>
            <Icon name="navicon" color="rgb(232,118,46)" size={50}></Icon>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            color: "rgb(181, 181, 181)",
            fontSize: 16,
            textAlign: "center",
            marginTop: 10
          }}
        >
          200 results
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    marginLeft: 10,
    fontSize: 18,
    fontFamily: "Nunito-Bold"
  },
  navContainer: {
    paddingBottom: 20,
    zIndex: 3,
    marginTop: 20
  },

  text: {
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Nunito-Bold"
  }
});

export default withNavigation(Navigation);
