import React, { useState } from "react";
import {
  Text,
  Picker,
  View,
  TextInput,
  Slider,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import RangeSlider from "react-native-range-slider";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function FavoritesScreen(props) {
  const [type, setType] = useState("Dog");
  const [zipCode, setZipCode] = useState("");
  const [travelDistance, setTravelDistance] = useState(5);

  function handleSubmit() {
    let regex = /^\d{5}$/;

    if (regex.test(zipCode)) {
      props.navigation.navigate("SearchScreen", {
        type: type,
        zipCode: zipCode,
        travelDistance: travelDistance
      });
    } else {
      alert(`Please Enter A Valid Zip Code`);
    }
  }

  function handleSlider(travelDistance) {
    setTravelDistance(travelDistance);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose your animal</Text>
      <View>
        <Text style={styles.title}>Animal type</Text>
        <View style={styles.typeSelector}>
          <TouchableOpacity
            style={styles.type}
            onPress={() => console.log("pressed")}
          >
            <Text style={styles.typeText}>Dog</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.type}
            onPress={() => console.log("pressed")}
          >
            <Text style={styles.typeText}>Cat</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.type}
            onPress={() => console.log("pressed")}
          >
            <Text style={styles.typeText}>Bunny</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.zipCodeContainer}>
        <Text style={styles.title}>Zip code (you can update anytime)</Text>
        <TextInput
          style={styles.input}
          maxLength={5}
          onChangeText={value => {
            setZipCode(value);
          }}
        />
      </View>

      <View style={styles.distanceContainer}>
        <Text style={styles.title}>
          <Text>Distance (miles) </Text>
          <Text style={styles.distance}>{travelDistance}</Text>
        </Text>
        <Slider
          step={5}
          minimumValue={5}
          maximumValue={100}
          onValueChange={handleSlider}
          value={travelDistance}
          style={styles.slider}
          minimumTrackTintColor="#00CDBC"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableHighlight style={styles.button} onPress={handleSubmit}>
          <Text style={styles.submit}>FIND YOUR MATCH</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontFamily: "Nunito-Bold",
    fontSize: 30,
    // marginBottom: "10%",
    marginTop: "10%"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    color: "gray",
    fontFamily: "Nunito",
    width: "80%"
  },
  buttonContainer: {
    marginBottom: "10%"
  },
  distanceContainer: {
    width: "100%"
  },
  distance: {
    color: "#00CDBC"
  },
  typeText: {
    justifyContent: "center"
  },
  slider: {
    width: "100%"
  },
  // animalType: {
  //   alignSelf: "flex-start"
  // },
  typeSelector: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: "5%",
    marginBottom: "5%"
  },
  type: {
    backgroundColor: "#ECECEC",
    flexDirection: "column",
    borderRadius: 40,
    width: 90,
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "gray",
    fontSize: 20,
    alignSelf: "flex-start"
  },
  submit: {
    textAlign: "center",
    color: "white",
    fontSize: 20
  },
  zipCodeContainer: {
    width: "100%"
  },
  // picker: {
  //   fontSize: 25,
  //   textAlign: "center"
  // },
  input: {
    height: 40,
    // width: "100%",
    // padding: 10,
    fontSize: 20,
    borderBottomColor: "gray",
    borderBottomWidth: 1
  },
  button: {
    backgroundColor: "#00CDBC",
    borderRadius: 40,
    width: 340,
    height: 50,
    justifyContent: "center",
    alignContent: "center"
  }
});
