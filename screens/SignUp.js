import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity
} from "react-native";
import SignIn from "./SignIn";
import firebase from "../components/firebase";

export default function SignUp(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignUp() {
    try {
      console.log("handle sign up", password);
      await firebase.register(name, email, password);
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
      <Text style={styles.header}>Let's get started</Text>
      <Text style={styles.inputLabel}>First name</Text>
      <TextInput
        label="First name"
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={firstName => setFirstName(firstName)}
        value={firstName}
      />
      <Text style={styles.inputLabel}>Last name</Text>
      <TextInput
        label="First name"
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={lastName => setLastName(lastName)}
        value={lastName}
      />
      <Text style={styles.inputLabel}>Email address</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={email => setEmail(email)}
        value={email}
      />
      <Text style={styles.inputLabel}>Password (6+ characters)</Text>
      <TextInput
        secureTextEntry
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={password => setPassword(password)}
        value={password}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.signUp}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    alignSelf: "flex-start",
    fontFamily: "Nunito-Bold",
    fontSize: 50,
    width: "80%",
    marginBottom: "10%",
    marginTop: "10%"
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
    width: "80%"
  },
  textInput: {
    height: "3%",
    width: "100%",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginTop: "5%"
  },
  inputLabel: {
    alignSelf: "flex-start",
    marginTop: "3%",
    color: "gray"
  },
  signUp: {
    fontSize: 15,
    fontFamily: "Nunito-Bold",
    color: "white"
  },
  button: {
    backgroundColor: "#00CDBC",
    borderRadius: 40,
    width: "100%",
    height: 50,
    margin: 30,
    justifyContent: "center",
    alignItems: "center"
  }
});
