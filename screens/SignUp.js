import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import SignIn from "./SignIn";
import firebase from "../components/firebase";
import { UserInterfaceIdiom } from 'expo-constants';

export default function SignUp (props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignUp() {
    try {
      console.log('handle sign up', password);
      await firebase.register(name, email, password);
      const options = {
        method: 'POST',
        body: JSON.stringify({userName: email}),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      };
    
      fetch(`https://petster3-back-end.herokuapp.com/users`, options)
      props.navigation.navigate('SignIn')
    } catch(error) {
      alert(error.message)
    }
  }

  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
      <TextInput
        placeholder="Name"
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={name => setName(name)}
        value={name}
      />
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
        onPress={() => props.navigation.navigate('SignIn')}
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
});

