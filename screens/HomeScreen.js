import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { AuthSession } from 'expo';

export default function HomeScreen(props) {

  function handleSubmit(event) {
    props.navigation.navigate('InputScreen');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome to petster!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#003366',
  },
  text: {
    fontSize: 65,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'AmaticSC-Bold',
  },
});

