import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  Slider,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import firebase from "../components/firebase";
import Image from "react-native-scalable-image";
import IconOcticons from "react-native-vector-icons/Octicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

export default function FavoritesScreen(props) {
  const toggleColors = [
    { display: "flex", color: "rgb(239,89,68)" },
    { display: "none", color: "rgb(74,74,74)" }
  ];
  const [type, setType] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [travelDistance, setTravelDistance] = useState(5);
  const [dogTypeColor, setDogTypeColor] = useState(1);
  const [catTypeColor, setCatTypeColor] = useState(1);
  const [rabbitTypeColor, setRabbitTypeColor] = useState(1);
  const [selected, setSelected] = useState([]);
  const user = firebase.getCurrentUsername();
  let zipcodeFromDatabase;

  useEffect(() => {
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(`https://petster3-back-end.herokuapp.com/users/${user}`, options)
      .then(data => data.json())
      .then(userArray => {
        setZipCode(userArray[0].zipcode.toString());
        zipcodeFromDatabase = userArray[0].zipcode.toString();
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  function handleSubmit() {
    let regex = /^\d{5}$/;
    if (!regex.test(zipCode)) {
      alert(`Please Enter A Valid Zip Code`);
    } else if (type === "") {
      alert(`Please Select An Animal`);
    } else {
      checkForZipChange(zipCode);
      props.navigation.navigate("SearchScreen", {
        type: type,
        zipCode: zipCode,
        travelDistance: travelDistance
      });
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

  function checkForZipChange(zipCode) {
    if (zipCode !== zipcodeFromDatabase) {
      let options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userName: user, zipCode: zipCode })
      };
      fetch(`https://petster3-back-end.herokuapp.com/users`, options);
    }
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginTop: 20
        }}
      >
        <TouchableOpacity
          onPress={() => props.navigation.navigate("MyAccountScreen")}
        >
          <IconOcticons
            name="person"
            color="rgb(184,184,184)"
            size={40}
          ></IconOcticons>
        </TouchableOpacity>
        <Text style={styles.header}>Filters</Text>
        <Text></Text>
      </View>
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
            <Image
              height={70}
              style={styles.image}
              source={require("../assets/images/dog.png")}
            ></Image>

            <View style={styles.typeTitle}>
              <Text
                style={[
                  styles.typeText,
                  { color: toggleColors[dogTypeColor].color }
                ]}
              >
                Dog
              </Text>
              <Icon
                style={[
                  {
                    display: toggleColors[dogTypeColor].display
                  },
                  styles.icon
                ]}
                name="check"
                color="rgb(239,89,68)"
                size={20}
              ></Icon>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.type,
              { backgroundColor: toggleColors[catTypeColor].backgroundColor }
            ]}
            onPress={() => handleToggle("Cat")}
          >
            <Image
              height={70}
              style={styles.image}
              source={require("../assets/images/cat.png")}
            ></Image>

            <View style={styles.typeTitle}>
              <Text
                style={[
                  styles.typeText,
                  { color: toggleColors[catTypeColor].color }
                ]}
              >
                Cat
              </Text>
              <Icon
                style={[
                  { display: toggleColors[catTypeColor].display },
                  styles.icon
                ]}
                name="check"
                color="rgb(239,89,68)"
                size={20}
              ></Icon>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.type,
              { backgroundColor: toggleColors[rabbitTypeColor].backgroundColor }
            ]}
            onPress={() => handleToggle("Rabbit")}
          >
            <Image
              height={70}
              style={[styles.image]}
              source={require("../assets/images/bunny.png")}
            ></Image>

            <View style={styles.typeTitle}>
              <Text
                style={[
                  styles.typeText,
                  {
                    backgroundColor:
                      toggleColors[rabbitTypeColor].backgroundColor
                  }
                ]}
              >
                Rabbit
              </Text>
              <Icon
                style={[
                  { display: toggleColors[rabbitTypeColor].display },
                  styles.icon
                ]}
                name="check"
                color="rgb(239,89,68)"
                size={20}
              ></Icon>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.zipCodeContainer}>
        <Text style={styles.title}>Zip code (you can update anytime)</Text>
        <TextInput
          style={styles.input}
          maxLength={5}
          value={zipCode}
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
          minimumTrackTintColor="rgb(239,89,68)"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableHighlight style={styles.button} onPress={handleSubmit}>
          <Text style={styles.submit}>SAVE FILTERS</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontFamily: "Nunito-Bold",
    fontSize: 30
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    fontFamily: "Nunito",
    width: "80%"
  },
  buttonContainer: {
    marginBottom: "10%"
  },
  typeTitle: {
    flexDirection: "row",
    fontFamily: "Nunito-Light"
  },
  distanceContainer: {
    width: "100%"
  },
  distance: {
    color: "rgb(239,89,68)"
  },
  icon: {
    marginLeft: 5,
    alignSelf: "center"
  },
  typeText: {
    justifyContent: "center",
    marginTop: 5,
    fontSize: 16,
    color: "rgb(74,74,74)",
    fontFamily: "Nunito-Light"
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
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    color: "rgb(74,74,74)"
  },
  title: {
    color: "rgb(74,74,74)",
    alignSelf: "flex-start",
    textAlign: "left",
    marginBottom: "5%",
    fontSize: 16,
    fontFamily: "Nunito-Light"
  },
  submit: {
    textAlign: "center",
    fontFamily: "Nunito-Bold",
    color: "white",
    fontSize: 14
  },
  zipCodeContainer: {
    width: "100%"
  },
  typeContainer: {
    width: "100%"
  },
  image: {
    width: 50,
    height: 60
  },
  input: {
    fontSize: 16,
    borderBottomColor: "rgb(193, 193, 193)",
    borderBottomWidth: 1,
    textAlign: "left",
    fontFamily: "Nunito",
    color: "rgb(74, 74, 74)"
  },
  buttonContainer: {
    marginBottom: "10%"
  },
  button: {
    backgroundColor: "rgb(239,89,68)",
    borderRadius: 40,
    width: 340,
    height: 50,
    justifyContent: "center",
    alignContent: "center"
  }
});
