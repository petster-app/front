import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button }  from 'react-native';
import SignUp from "./SignUp";
import firebase from "../components/firebase";
import InputScreen from "./InputScreen";

export default function SignIn(props) {
  const [email, setEmail] = useState('evanbc1@gmail.com');
  const [password, setPassword] = useState('1234Asdf');
  
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
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 8,
    textAlign: 'center',
    color: '#ffffff',
  },
});
