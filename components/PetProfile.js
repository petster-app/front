import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Dimensions } from "react-native";

export default function PetProfile(props) {
  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer, { zIndex: 1 }]}>
        {props.pet.photo ? (
          <Image style={[styles.image]} source={{ uri: props.pet.photo }} />
        ) : (
            <Image
              style={[styles.image]}
              source={require("../assets/images/noPet.png")}
            />
          )}
      </View>

      <Text style={styles.name}>{props.pet.name}</Text>
      <View style={styles.details}>
        <Text style={[styles.text, { marginRight: 40 }]}>{props.pet.age}</Text>
        <Text style={styles.text}>{props.pet.gender}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    // flex: 1,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#a9a9a9",
    justifyContent: "center",
    backgroundColor: "white"
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
    height: Dimensions.get("window").height / 1.9
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
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    overflow: "hidden"
  }
});
