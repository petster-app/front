import React, { useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default function PetProfile(props) {
  console.log(props.pet, 'hi this is the name')
  return (
    <View>
      <Image style={{width: 400, height: 400}} source={{uri: props.pet.photo}} />
    <Text>{props.pet.name}</Text>
    <Text>{props.pet.primaryBreed}</Text>
    <Text>{props.pet.age}</Text>
    <Text>{props.pet.gender}</Text>
    </View>
  );
}
