import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';

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
    fetch(`http://localhost:3000/favorites/${user}`, options)
      .then((results) => results.json())
      .then((data) => {
        setFavorites(data);
      })
  }, [])

    //console.log(favorites)
    return (
      <View style={styles.container}>
        <Text>Favorite Pets</Text>
        {favorites.map((pet, index) => 
        <View key={index}>
          <Image style={{width: 200, height: 200}} source={{uri : pet.photo }} />
          <Text style={styles.text}>{pet.name}</Text>
          <Text style={styles.text}>{pet.age}</Text>
          <Text style={styles.text}>{pet.description}</Text>
        </View>
        )}
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
    fontSize: 15,
    textAlign: 'center',
    color: '#ffffff',
  },
  image: {
    textAlign: 'center'
  }
});