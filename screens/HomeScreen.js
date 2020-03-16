import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import SignUp from "./SignUp";
import firebase from "../components/firebase";
import InputScreen from "./InputScreen";

export default function HomeScreen(props) {
  const [email, setEmail] = useState("evanbc1@gmail.com");
  const [password, setPassword] = useState("1234Asdf");

  async function handleLogin() {
    props.navigation.navigate("SignIn");
  }

  function handleSignUp() {
    props.navigation.navigate("SignUp");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Icon
            style={{ justifyContent: "center" }}
            name="paw"
            color="rgb(239,89,68)"
            size={30}
          ></Icon>
          <Text style={[styles.text, styles.headerText]}>PETSTER</Text>
        </View>
        <Text style={styles.bodyText}>
          Connecting fury friends with their forever home
        </Text>
      </View>

      <View styles={styles.bottomContainer}>
        <View style={{ width: "50%" }}>
          <Image
            style={styles.image}
            source={require("../assets/images/animals-group.png")}
          ></Image>
        </View>
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
    // justifyContent: "space-around",
    alignItems: "center"
  },
  login: {
    color: "rgb(239,89,68)"
  },
  loginContainer: {
    margin: 15
  },
  header: {
    width: "80%",
    marginTop: 20
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "flex-start"
  },
  headerText: {
    marginLeft: 10,
    fontSize: 18,
    justifyContent: "center",
    alignSelf: "center"
  },
  image: {
    height: 200,
    marginTop: 80
  },
  text: {
    textAlign: "center",
    fontFamily: "Nunito-Bold",
    fontSize: 14
  },
  bodyText: {
    fontSize: 40,
    textAlign: "left",
    fontFamily: "Nunito-Bold",
    width: 400,
    marginTop: 30
  },
  bottomContainer: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "rgb(239,89,68)",
    borderRadius: 40,
    width: 310,
    height: 50,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 30
  },
  signUp: {
    fontSize: 18,
    fontFamily: "Nunito-Bold",
    color: "white",
    textAlign: "center"
  }
});
