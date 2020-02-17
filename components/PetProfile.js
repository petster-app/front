import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, Button, Animated } from 'react-native';

export default function PetProfile(props) {

  return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: props.pet.photo}} />
        <Text style={styles.text}>{props.pet.name}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 415,
    height: 400,
    padding: 75,
  },
  text: {
    marginTop: 10, 
    fontSize: 40,
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'AmaticSC-Regular',
  },
});
