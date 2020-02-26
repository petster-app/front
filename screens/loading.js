import React, {useEffect} from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'firebase'

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

export default function Loading () {

  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(user => {
      props.navigation.navigate(user ? 'Main' : 'SignUp')
    })
  }, []);

    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});