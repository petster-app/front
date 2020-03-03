import React, {useState} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import firebase from "../components/firebase";
import SignIn from "./SignIn";

export default function SignOut (props) {

  async function handleLogout() {
      console.log('logged out');
      await firebase.logout();
      props.navigation.navigate('SignIn');
  }

  return (
    <View style={styles.container}>
      <Text>Hello { firebase.getCurrentName() } </Text>
      <Button title="Log Out" onPress={handleLogout} />
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

