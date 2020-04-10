import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconOcticons from "react-native-vector-icons/Octicons";
import InputScreen from "../screens/InputScreen";
import { withNavigation } from "react-navigation";
import ArrowIcon from "react-native-vector-icons/FontAwesome5";

function Navigation(props) {
  function handleFilterClick() {
    props.navigation.navigate("InputScreen");
  }

  function handleAccountClick() {
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
            width: 325
          }}
        >
          <TouchableOpacity onPress={handleAccountClick}>
            <IconOcticons
              name="person"
              color="rgb(169,169,169)"
              size={40}
            ></IconOcticons>
          </TouchableOpacity>

          <View style={styles.headerTitle}>
            <Icon name="paw" color="rgb(239,89,68)" size={35} />
            <Text style={[styles.text, styles.headerText]}>PETSTER</Text>
          </View>

          <TouchableOpacity onPress={handleFilterClick}>
            <IconOcticons
              name="search"
              color="rgb(232,118,46)"
              size={40}
            ></IconOcticons>
          </TouchableOpacity>
        </View>
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
    paddingBottom: 10,
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
