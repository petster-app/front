import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import ArrowIcon from "react-native-vector-icons/FontAwesome5";
import { Dimensions } from "react-native";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Slider
} from "react-native";
import firebase from "../components/firebase";

export default function SignIn(props) {
  const [email, setEmail] = useState("testing@test.com");
  const [password, setPassword] = useState("testingtest");
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
    if (email.length && password.length) {
      setInputComplete(true);
    } else {
      setInputComplete(false);
    }
  }

  async function handleLogin() {
    try {
      await firebase.login(email, password);
      await setPassword("");
      props.navigation.navigate("InputScreen");
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
            size={30}
            style={{ marginBottom: 25, marginTop: 50 }}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Sign In</Text>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email address"
          onChangeText={email => {
            setEmail(email);
            checkInput();
          }}
          value={email}
        />

        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password (6+ characters)"
          onChangeText={password => {
            setPassword(password);
            checkInput();
          }}
          value={password}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonColor }]}
          onPress={handleLogin}
        >
          <Text style={styles.submit}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
    width: "80%",
    justifyContent: "space-between"
  },
  header: {
    alignSelf: "flex-start",
    fontFamily: "Nunito-Bold",
    fontSize: 40,
    width: "80%",
    marginBottom: 10
  },
  login: {
    color: "#00CDBC"
  },
  loginContainer: {
    margin: 15
  },
  text: {
    textAlign: "center",
    fontFamily: "Nunito-Bold"
  },
  bodyText: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Nunito",
    width: 300
  },
  inputContainer: {
    width: "100%"
  },
  textInput: {
    borderBottomColor: "rgb(193, 193, 193)",
    borderBottomWidth: 1,
    marginTop: 60,
    paddingBottom: 5,
    fontSize: 16,
    fontFamily: "Nunito-Light",
    color: "rgb(74, 74, 74)"
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
  },
  submit: {
    textAlign: "center",
    fontFamily: "Nunito-Bold",
    color: "white",
    fontSize: 14
  }
});
