import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import HomeScreen from "./HomeScreen";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBGQ6NIc4_oolaT-YzrKZGLlLhXr8fsOWc",
  authDomain: "petster-test.firebaseapp.com",
  databaseURL: "https://petster-test.firebaseio.com",
  projectId: "petster-test",
  storageBucket: "petster-test.appspot.com",
  messagingSenderId: "544087589053",
  appId: "1:544087589053:web:547668da4e72bfc945f7d4",
  measurementId: "G-XJ5LF8ZHMC"
};

export default function SignUp (props) {

  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  function handleSignUp() {

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => props.navigation.navigate('HomeScreen'))
      .catch(error => console.log(error));
    console.log('handleLogin')
  }
  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
      {errorMessage &&
      <Text style={{ color: 'red' }}>
        {errorMessage}
      </Text>}
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={email => setEmail(email)}
        value={email}
      />
      <TextInput
        secureTextEntry
        placeholder="Password"
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={password => setPassword(password)}
        value={password}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button
        title="Already have an account? Login"
        onPress={() => props.navigation.navigate('HomeScreen')}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})

