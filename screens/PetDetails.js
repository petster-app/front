import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Image from "react-native-scalable-image";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function PetProfile(props) {
  const pet = props.navigation.state.params.pet;
  console.log(pet.description, pet.name);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Text></Text>
        <View style={[styles.headerTitle, { marginTop: 20, marginBottom: 20 }]}>
          <Icon name="paw" color="rgb(239,89,68)" size={30}></Icon>
          <Text style={[styles.text, styles.headerText]}>PETSTER</Text>
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("SearchScreen")}
        >
          <Image width={22} source={require("../assets/images/x-icon.png")} />
        </TouchableOpacity>
      </View>
      <View>
        <SafeAreaView>
          <ScrollView>
            <View style={{ flexDirection: "row" }}>
              <Image
                width={135}
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
                  {pet.primaryBreed}
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
              <Text style={[styles.aboutText, { fontFamily: "Nunito-Bold" }]}>
                PHYSICAL CHARACTERISTICS
              </Text>

              <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.aboutText}>Size</Text>
                  <Text style={styles.aboutText}>Fur</Text>
                  <Text style={styles.aboutText}>Color</Text>
                </View>

                <View style={{ flexDirection: "column", marginLeft: 20 }}>
                  <Text style={[styles.aboutText, { fontFamily: "Nunito" }]}>
                    {pet.size}
                  </Text>

                  <Text style={[styles.aboutText, { fontFamily: "Nunito" }]}>
                    TBD - change
                  </Text>
                  <Text style={[styles.aboutText, { fontFamily: "Nunito" }]}>
                    TBD - change
                  </Text>
                </View>
              </View>

              <View style={{ marginTop: 20 }}>
                <Text style={[styles.aboutText, { fontFamily: "Nunito-Bold" }]}>
                  HEALTH
                </Text>
                <Text style={[styles.aboutText, { fontFamily: "Nunito" }]}>
                  TBD - change
                </Text>
                <Text style={[styles.aboutText, { fontFamily: "Nunito" }]}>
                  TBD - change
                </Text>
              </View>

              <View style={{ marginTop: 20 }}>
                <Text style={[styles.aboutText, { fontFamily: "Nunito-Bold" }]}>
                  BEHAVIORAL CHARACTERISTICS
                </Text>
                <Text style={[styles.aboutText, { fontFamily: "Nunito" }]}>
                  TBD - change
                </Text>
                <Text style={[styles.aboutText, { fontFamily: "Nunito" }]}>
                  TBD - change
                </Text>
                <Text style={[styles.aboutText, { fontFamily: "Nunito" }]}>
                  TBD - change
                </Text>
              </View>
            </View>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View style={[styles.button, { marginTop: 40 }]}>
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
                  width: 300,
                  fontSize: 12,
                  marginTop: 10
                }}
              >
                You’ll be taken out of the app and to a pet profile on
                petfinder.com
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 10
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
    width: 340,
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
