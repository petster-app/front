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
import Icon from "react-native-vector-icons/Entypo";

export default function PetProfile(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: props.pet.photo }} />
        <Text style={styles.name}>{props.pet.name}</Text>
        <View style={styles.details}>
          <Text style={styles.text}>{props.pet.age}</Text>
          <Icon name="dot-single" color="black" size={35}></Icon>
          <Text style={styles.text}>{props.pet.primaryBreed}</Text>
        </View>
      </View>
      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLike}>
          <Icon name="heart" color="white" size={35}></Icon>
        </TouchableOpacity>
      </View> */}
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
    justifyContent: "center"
  },
  image: {
    width: 390,
    height: 450,
    padding: 75,
    borderRadius: 10
  },
  text: {
    marginTop: 10,
    fontSize: 15,
    textAlign: "center",
    color: "black",
    fontFamily: "Nunito-Bold"
  },
  name: {
    marginTop: 10,
    fontSize: 30,
    textAlign: "center",
    color: "black",
    fontFamily: "Nunito-Bold"
  },
  imageContainer: {
    width: 390,
    height: 550,
    // borderRadius: 10,
    overflow: "hidden"
  }
});
