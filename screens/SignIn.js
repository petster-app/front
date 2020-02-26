import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button }  from 'react-native';
import SignUp from "./SignUp";
import Loading from "./loading";
import firebase from "../components/firebase";
import InputScreen from "./InputScreen";

export default function SignIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

    async function handleLogin() {
      try {
        await firebase.login(email, password);
        await setPassword('');
        props.navigation.navigate('InputScreen')
      } catch(error) {
        alert(error.message);
      }
    }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome to petster!
      </Text>
      <Text style={styles.bodyText}>Sign In</Text>
      {errorMessage &&
      <Text style={{ color: 'red' }}>
        {errorMessage}
      </Text>}
      <TextInput
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
      />
      <Button title="Login" onPress={handleLogin} />
      <Button
        title="Don't have an account? Sign Up"
        onPress={() => props.navigation.navigate('SignUp')}
      />
      <Button
        title="Loading"
        onPress={() => props.navigation.navigate('Loading')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003366',
  },
  text: {
    fontSize: 65,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'AmaticSC-Bold',
  },
  bodyText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'AmaticSC-Bold',
  },
  textInput: {
    height: 40,
    width: '90%',
    marginLeft: '5%',
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 8,
    textAlign: 'center',
    color: '#ffffff',
  },
});
