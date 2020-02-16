import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

export default function PetProfile(props) {
  const pet = props.navigation.state.params.pet;
  console.log(pet.description, pet.name)
  return (
    <View style={styles.container}>
    <SafeAreaView>
    <ScrollView>
          <Text style={[styles.text, styles.name]}>{pet.name}</Text>
          <Image style={styles.image} source={{uri: pet.photo}} />
          <View style={styles.row}>
            <Text style={styles.text}>{pet.gender}</Text>
            <Text style={styles.text}>{pet.size}</Text>
          </View>
          <Text style={styles.text}>{pet.description}</Text>
          <Text style={[styles.text,styles.link]} onPress={() => Linking.openURL(pet.url)}>ADOPT ME!</Text>
      </ScrollView>
      </SafeAreaView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#003366',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 415,
    height: 400,
    padding: 75,
  },
  row: {
    flexDirection: 'row',
    width: 200,
    justifyContent: 'space-around',
  },
  name: {
    margin: 10,
    fontSize: 40,
    fontFamily: 'AmaticSC-Bold',
  },
  text: {
    margin: 5, 
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'AmaticSC-Regular',
  },
  link: {
    alignItems: 'center',
    fontFamily: 'AmaticSC-Regular',
    fontSize: 25,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#ffffff',
    width: 125,
    margin: 20, 
  },
});
