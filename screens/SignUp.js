import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from "react-native";
import SignIn from "./SignIn";
import firebase from "../components/firebase";
import ArrowIcon from "react-native-vector-icons/FontAwesome5";

export default function SignUp(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [password, setPassword] = useState("");
  const [inputComplete, setInputComplete] = useState(false);
  const [buttonColor, setButtonColor] = useState("rgb(202,202,202)");

  useEffect(() => {
    if (inputComplete) {
      setButtonColor("rgb(239,89,68)");
    } else {
      setButtonColor("rgb(202,202,202)");
    }
  }, [inputComplete]);

  function checkInput() {
    if (
      firstName.length &&
      lastName.length &&
      email.length &&
      password.length
    ) {
      setInputComplete(true);
    } else {
      setInputComplete(false);
    }
  }

  async function handleSignUp() {
    try {
      await firebase.register(firstName, email, password);
      const options = {
        method: "POST",
        body: JSON.stringify({ userName: email }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      };

      fetch(`https://petster3-back-end.herokuapp.com/users`, options);
      props.navigation.navigate("SignIn");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("HomeScreen")}
        >
          <ArrowIcon
            name="arrow-left"
            color="rgb(184,184,184)"
            size={35}
            style={{ marginBottom: 25, marginTop: 50 }}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Let's get started</Text>

        <View>
          <TextInput
            placeholder="First Name"
            label="First name"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={firstName => {
              setFirstName(firstName);
              checkInput();
            }}
            value={firstName}
          />
        </View>

        <View>
          <TextInput
            placeholder="Last name"
            label="First name"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={lastName => {
              setLastName(lastName);
              checkInput();
            }}
            value={lastName}
          />
        </View>

        <View>
          <TextInput
            placeholder="Zip Code (to search for nearby pets)"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={zipCode => {
              setZipCode(zipCode);
              checkInput();
            }}
            value={zipCode}
          />
        </View>

        <View>
          <TextInput
            placeholder="Email address"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={email => {
              setEmail(email);
              checkInput();
            }}
            value={email}
          />
        </View>

        <View>
          <TextInput
            placeholder="Password (6+ characters)"
            secureTextEntry
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={password => {
              setPassword(password);
              checkInput();
            }}
            value={password}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonColor }]}
          onPress={handleSignUp}
        >
          <Text style={styles.submit}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    alignSelf: "flex-start",
    fontFamily: "Nunito-Bold",
    fontSize: 40,
    width: "80%"
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    width: "80%"
  },
  inputContainer: {
    width: "100%"
  },
  textInput: {
    borderBottomColor: "rgb(193, 193, 193)",
    borderBottomWidth: 1,
    marginTop: "12%",
    fontSize: 16,
    fontFamily: "Nunito-Light",
    paddingBottom: 5,
    color: "rgb(74, 74, 74)"
  },
  submit: {
    textAlign: "center",
    fontFamily: "Nunito-Bold",
    color: "white",
    fontSize: 14
  },
  buttonContainer: {
    marginBottom: "10%"
  },
  button: {
    borderRadius: 40,
    width: 340,
    height: 50,
    justifyContent: "center",
    alignContent: "center"
  }
});
