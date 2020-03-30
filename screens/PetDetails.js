import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Linking
} from "react-native";
import ArrowIcon from "react-native-vector-icons/FontAwesome5";
import Image from "react-native-scalable-image";
import Constants from "expo-constants";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function PetProfile(props) {
  const pet = props.navigation.state.params.pet;
  const comingFromScreen = props.navigation.state.params.comingFromScreen;

  function handleNavigation() {
    if (comingFromScreen === "search") {
      props.navigation.navigate("SearchScreen");
    } else {
      props.navigation.navigate("FavoritesScreen");
    }
  }

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10
          }}
        >
          <TouchableOpacity onPress={handleNavigation}>
            <ArrowIcon
              name="arrow-left"
              color="rgb(184,184,184)"
              size={30}
              style={{ paddingLeft: 50 }}
            ></ArrowIcon>
          </TouchableOpacity>
          <View
            style={[styles.headerTitle, { marginTop: 20, marginBottom: 20 }]}
          >
            <Icon name="paw" color="rgb(239,89,68)" size={30}></Icon>
            <Text style={[styles.text, styles.headerText]}>PETSTER</Text>
          </View>

          <Text style={{ paddingRight: 50 }}></Text>
        </View>
        <View>
          <SafeAreaView style={{ width: "100%" }}>
            <ScrollView>
              <View
                style={{
                  flexDirection: "column",
                  // width: "100%",
                  paddingLeft: 20,
                  paddingRight: 20,
                  // alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <View style={{ flexDirection: "row", overflow: "hidden" }}>
                  <Image
                    height={135}
                    style={styles.image}
                    source={{ uri: pet.photo }}
                  />

                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      margin: 0,
                      marginLeft: 20
                    }}
                  >
                    <Text
                      style={[
                        (styles.text, styles.name),
                        {
                          margin: 0,
                          marginLeft: 10,
                          fontFamily: "Nunito-ExtraBold"
                        }
                      ]}
                    >
                      {pet.name}
                    </Text>
                    <Text style={[styles.text, { margin: 0, marginLeft: 10 }]}>
                      {pet.city}, {pet.state}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 20,
                    justifyContent: "space-between"
                  }}
                >
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-start"
                    }}
                  >
                    <Text style={[styles.text, { fontFamily: "Nunito-Light" }]}>
                      Age
                    </Text>
                    <Text style={[styles.text, { fontFamily: "Nunito-Bold" }]}>
                      {pet.age}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-start"
                    }}
                  >
                    <Text style={[styles.text, { fontFamily: "Nunito-Light" }]}>
                      Sex
                    </Text>
                    <Text style={[styles.text, { fontFamily: "Nunito-Bold" }]}>
                      {pet.gender}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-start"
                    }}
                  >
                    <Text style={[styles.text, { fontFamily: "Nunito-Light" }]}>
                      Breed
                    </Text>
                    <Text style={[styles.text, { fontFamily: "Nunito-Bold" }]}>
                      {pet.primaryBreed ? pet.primaryBreed : "N/A"}
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "column", marginTop: 20 }}>
                  <Text
                    style={[
                      styles.aboutText,
                      {
                        fontFamily: "Nunito-ExtraBold",
                        fontSize: 24,
                        marginBottom: 20
                      }
                    ]}
                  >
                    ABOUT
                  </Text>
                  <Text
                    style={[styles.aboutText, { fontFamily: "Nunito-Bold" }]}
                  >
                    PHYSICAL CHARACTERISTICS
                  </Text>

                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flexDirection: "column" }}>
                      <Text style={styles.aboutText}>Size</Text>

                      <Text style={styles.aboutText}>Color</Text>
                    </View>

                    <View style={{ flexDirection: "column", marginLeft: 20 }}>
                      <Text
                        style={[styles.aboutText, { fontFamily: "Nunito" }]}
                      >
                        {pet.size ? pet.size : "N/A"}
                      </Text>

                      <Text
                        style={[styles.aboutText, { fontFamily: "Nunito" }]}
                      >
                        {pet.color ? pet.color : "N/A"}
                      </Text>
                    </View>
                  </View>

                  <View style={{ marginTop: 20 }}>
                    <Text
                      style={[styles.aboutText, { fontFamily: "Nunito-Bold" }]}
                    >
                      HEALTH
                    </Text>
                    <Text style={[styles.aboutText, { fontFamily: "Nunito" }]}>
                      {pet.spayedNeutered
                        ? "Spayed / Neutered"
                        : "Not Spayed / Neutered"}
                    </Text>
                    <Text style={[styles.aboutText, { fontFamily: "Nunito" }]}>
                      {pet.shotsCurrent
                        ? "Vaccinations up to date"
                        : "Vaccinations not up to date"}
                    </Text>
                  </View>

                  <View style={{ marginTop: 20 }}>
                    <Text
                      style={[styles.aboutText, { fontFamily: "Nunito-Bold" }]}
                    >
                      BEHAVIORAL CHARACTERISTICS
                    </Text>
                    <Text style={[styles.aboutText, { fontFamily: "Nunito" }]}>
                      {pet.houseTrained ? "House-trained" : "Not House-trained"}
                    </Text>
                    <Text style={[styles.aboutText, { fontFamily: "Nunito" }]}>
                      {pet.goodWithKids
                        ? "Good with kids"
                        : "Not good with kids"}
                    </Text>
                    <Text style={[styles.aboutText, { fontFamily: "Nunito" }]}>
                      {pet.goodWithDogs
                        ? "Good with other dogs"
                        : "Not good with other dogs"}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 40,
                    marginTop: 40,
                    width: 310
                  }}
                >
                  <View style={[styles.button]}>
                    <Text
                      style={styles.submit}
                      onPress={() => Linking.openURL(pet.url)}
                    >
                      FIND OUT MORE
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: "rgb(74,74,74)",
                      textAlign: "center",
                      fontSize: 12,
                      marginTop: 10,
                      paddingBottom: 40
                    }}
                  >
                    You’ll be taken out of the app and to a pet profile on
                    petfinder.com!
                  </Text>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  headerTitle: {
    flexDirection: "row"
  },
  headerText: {
    marginLeft: 10,
    fontSize: 18,
    justifyContent: "center",
    alignSelf: "center",
    fontFamily: "Nunito-Bold"
  },
  image: {
    borderRadius: 20
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  subHeader: {
    marginRight: 20
  },
  name: {
    margin: 10,
    fontSize: 24,
    fontFamily: "Nunito-Bold",
    color: "rgb(74,74,74)"
  },
  aboutText: {
    marginTop: 2,
    marginBottom: 2,
    fontSize: 16,
    color: "rgb(74,74,74)",
    fontFamily: "Nunito-Light"
  },
  text: {
    marginTop: 2,
    marginBottom: 2,
    fontSize: 14,
    color: "rgb(74,74,74)",
    fontFamily: "Nunito"
  },
  button: {
    borderRadius: 40,
    width: 310,
    height: 50,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "rgb(239,89,68)"
  },
  submit: {
    textAlign: "center",
    fontFamily: "Nunito-Bold",
    color: "white",
    fontSize: 14
  }
});
