import React, {useEffect} from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'firebase'

export default function Loading () {

  // useEffect(() => {
  //   firebase.initializeApp(firebaseConfig);
  //   firebase.auth().onAuthStateChanged(user => {
  //     props.navigation.navigate(user ? 'Main' : 'SignUp')
  //   })
  // }, []);

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