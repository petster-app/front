import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  Animated,
  Linking,
  TouchableHighlight
} from "react-native";

export default function PetProfile(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: props.pet.photo }} />
      <Text style={styles.text}>{props.pet.name}</Text>
      <View style={styles.buttons}>
        <Text style={[styles.link, styles.text]}>ADOPT ME!</Text>
        <TouchableHighlight>
          <Text style={[styles.link, styles.text]}>MORE INFO</Text>
        </TouchableHighlight>
        <Text style={[styles.link, styles.text]}>DELETE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 415,
    height: 400,
    padding: 75
  },
  text: {
    marginTop: 10,
    fontSize: 40,
    textAlign: "center",
    color: "#ffffff",
    fontFamily: "AmaticSC-Regular"
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    width: 300,
    justifyContent: "space-around"
  },
  link: {
    fontFamily: "AmaticSC-Regular",
    fontSize: 20,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#ffffff",
    width: 75
  }
});
