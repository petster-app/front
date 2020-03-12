import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Slider
} from "react-native";
import SignUp from "./SignUp";
import firebase from "../components/firebase";
import InputScreen from "./InputScreen";

export default function SignIn(props) {
  const [email, setEmail] = useState("evanbc1@gmail.com");
  const [password, setPassword] = useState("1234Asdf");

  async function handleLogin() {
    try {
      await firebase.login(email, password);
      await setPassword("");
      props.navigation.navigate("InputScreen");
    } catch (error) {
      alert(error.message);
    }
  }

  function handleSignUp() {
    props.navigation.navigate("SignUp");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Icon name="paw" color="#00CDBC" size={40}></Icon>
          <Text style={[styles.text, styles.headerText]}>PETSTER</Text>
        </View>
        <Text style={styles.bodyText}>
          Connecting fury friends with their forever home.
        </Text>
      </View>
      {/* <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Email"
        onChangeText={email => setEmail(email)}
        value={email}
      />
      <TextInput
        secureTextEntry
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Password"
        onChangeText={password => setPassword(password)}
        value={password}
      /> */}
      <View>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.signUp}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text style={styles.text}>
            Already have an account?{" "}
            <Text onPress={handleLogin} style={styles.login}>
              Login
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  login: {
    color: "#00CDBC"
  },
  loginContainer: {
    margin: 15
  },
  header: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center"
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center"
  },
  headerText: {
    marginLeft: 10,
    fontSize: 50
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
  textInput: {
    height: 30,
    width: "90%",
    borderColor: "white",
    borderWidth: 1,
    marginTop: 8,
    textAlign: "center"
  },
  button: {
    backgroundColor: "#00CDBC",
    borderRadius: 40,
    width: 310,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  signUp: {
    fontSize: 30,
    fontFamily: "Nunito-Bold",
    color: "white"
  }
});
