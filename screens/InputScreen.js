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
import { TouchableOpacity } from "react-native-gesture-handler";

export default function FavoritesScreen(props) {
  const toggleColors = [
    { backgroundColor: "#00CDBC", color: "white" },
    { backgroundColor: "#ECECEC", color: "black" }
  ];

  const [type, setType] = useState("");
  const [zipCode, setZipCode] = useState("98103");
  const [travelDistance, setTravelDistance] = useState(5);
  const [dogTypeColor, setDogTypeColor] = useState(1);
  const [catTypeColor, setCatTypeColor] = useState(1);
  const [bunnyTypeColor, setBunnyTypeColor] = useState(1);
  const [selected, setSelected] = useState([]);

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

  function handleToggle(type) {
    let value;

    if (selected.length) {
      value = selected.pop();
      eval(`set${value}TypeColor(1)`);
    }

    if (eval(`${type.toLowerCase()}TypeColor`) === 1) {
      eval(`set${type}TypeColor(0)`);
    } else {
      eval(`set${type}TypeColor(1)`);
    }

    setSelected([type]);
    setType(type);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose your animal</Text>

      <View style={styles.typeContainer}>
        <Text style={styles.title}>Animal type</Text>
        <View style={styles.typeSelector}>
          <TouchableOpacity
            style={[
              styles.type,
              { backgroundColor: toggleColors[dogTypeColor].backgroundColor }
            ]}
            onPress={() => handleToggle("Dog")}
          >
            <Text
              style={[
                styles.typeText,
                { color: toggleColors[dogTypeColor].color }
              ]}
            >
              Dog
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.type,
              { backgroundColor: toggleColors[catTypeColor].backgroundColor }
            ]}
            onPress={() => handleToggle("Cat")}
          >
            <Text
              style={[
                styles.typeText,
                { color: toggleColors[catTypeColor].color }
              ]}
            >
              Cat
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.type,
              { backgroundColor: toggleColors[bunnyTypeColor].backgroundColor }
            ]}
            onPress={() => handleToggle("Bunny")}
          >
            <Text
              style={[
                styles.typeText,
                {
                  backgroundColor: toggleColors[bunnyTypeColor].backgroundColor
                }
              ]}
            >
              Bunny
            </Text>
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
  typeSelector: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  },
  type: {
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
    alignSelf: "flex-start",
    marginBottom: "5%"
  },
  submit: {
    textAlign: "center",
    fontFamily: "Nunito-Bold",
    color: "white",
    fontSize: 20
  },
  zipCodeContainer: {
    width: "100%"
  },
  typeContainer: {
    width: "100%"
  },
  input: {
    fontSize: 20,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    textAlign: "center",
    fontFamily: "Nunito"
  },
  buttonContainer: {
    marginBottom: "10%"
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
