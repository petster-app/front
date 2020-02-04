import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';

export default function PetProfile(props) {

  return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: props.pet.photo}} />
        <Text style={styles.text}>{props.pet.name}</Text>
        <View style={styles.buttons}>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  image: {
    borderColor: 'black',
    borderRadius: 4,
    borderWidth: 2,
    width: 400,
    height: 400,
    padding: 75,
  },
  text: {
    marginTop: 10, 
    fontSize: 25,
    textAlign: 'center',
    color: '#ffffff',
  },
});
