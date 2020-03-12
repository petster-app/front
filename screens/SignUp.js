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
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>First name</Text>
        <TextInput
          label="First name"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={firstName => setFirstName(firstName)}
          value={firstName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Last name</Text>
        <TextInput
          label="First name"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={lastName => setLastName(lastName)}
          value={lastName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email address</Text>
        <TextInput
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => setEmail(email)}
          value={email}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password (6+ characters)</Text>
        <TextInput
          secureTextEntry
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => setPassword(password)}
          value={password}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
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
    fontSize: 50,
    width: "80%",
    marginTop: "2.5%"
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
    width: "80%"
  },
  inputContainer: {
    width: "100%"
  },
  textInput: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginTop: "5%",
    fontSize: 20,
    fontFamily: "Nunito"
  },
  inputLabel: {
    alignSelf: "flex-start",
    marginTop: "3%",
    color: "gray"
  },
  submit: {
    textAlign: "center",
    fontFamily: "Nunito-Bold",
    color: "white",
    fontSize: 20
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
