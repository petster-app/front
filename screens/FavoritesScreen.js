import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';

export default function favoritesScreen () {
  const [favorites, setFavorites] = useState([]);

  let user = 'Bob'

  useEffect(() => {
    let options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }
    fetch(`http://localhost:3000/favorites`, options)
      .then((results) => results.json())
      .then((data) => {
        setFavorites(data);
      })
  }, [])

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.container}>
            <Text styles={styles.header}>Favorite Pets</Text>
            {favorites.map((pet, index) => 
            <View key={index}>
              <Image style={styles.image} source={{uri : pet.photo }} />
              <Text style={styles.text}>{pet.name}</Text>
              <Text style={styles.text}>{pet.age}</Text>
              <Text style={styles.text}>{pet.description}</Text>
            </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#003366',
    alignItems: 'center'
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    color: '#ffffff',
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    color: '#ffffff'
  },
  image: {
    alignItems: 'center',
    width: 300,
    height: 300,
  }
});