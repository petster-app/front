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
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.header}>Favorite Pets</Text>
            {favorites.map((pet, index) => 
            <View style={styles.container} key={index}>
              <Image style={styles.image} source={{uri : pet.photo }} />
              <Text style={[styles.name,styles.text]}>{pet.name}</Text>
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
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontFamily: 'AmaticSC-Regular',
    textAlign: 'center',
    color: '#ffffff',
    width: 300
  },
  name: {
    margin: 5,
    fontSize: 30,
  },
  header: {
    fontFamily: 'AmaticSC-Bold',
    color: '#ffffff',
    fontSize: 40,
    margin: 10,
  },
  image: {
    width: 415,
    height: 400,
    padding: 75,
  },
});