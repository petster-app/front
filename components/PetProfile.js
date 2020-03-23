import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  Animated,
  Linking,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";

export default function PetProfile(props) {
  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer, { zIndex: 1 }]}>
        <Image style={styles.image} source={{ uri: props.pet.photo }} />
      </View>
      <View style={{}}></View>
      <View style={{}}>
        <Text style={styles.name}>{props.pet.name}</Text>
        <View style={styles.details}>
          <Text style={[styles.text, { marginRight: 40 }]}>
            {props.pet.age}
          </Text>
          <Text style={styles.text}>{props.pet.gender}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  signUp: {
    fontSize: 30,
    fontFamily: "Nunito-Bold",
    color: "white"
  },
  details: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 30
  },
  image: {
    width: "100%",
    height: 460
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
    color: "black",
    fontFamily: "Nunito-Bold"
  },
  name: {
    marginTop: 10,
    fontSize: 21,
    textAlign: "center",
    color: "black",
    fontFamily: "Nunito-Bold"
  },
  imageContainer: {
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden"
  }
});
