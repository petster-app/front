import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Linking, TouchableHighlight } from 'react-native';
import PetDetails from '../components/PetDetails';

export default function favoritesScreen (props) {
  const [favorites, setFavorites] = useState([]);
  const [updatePage, setUpdatePage] = useState(false);
  console.log(process.env.REACT_APP_API, process.env.REACT_APP_TEST_VAR)

  let user = 'Bob'
  function handleDetails(pet){
    props.navigation.navigate('PetDetails', {pet: pet});
  }

  function handleDelete(pet){
    let options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pet),
    }
    fetch(`https://petster3-back-end.herokuapp.com/favorites`, options)
    .then((result) => {
      console.log(result)
    })

    setUpdatePage(true);
  }

  useEffect(() => {
    let options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }
    fetch(`https://petster3-back-end.herokuapp.com/favorites/${user}`, options)
      .then((results) => results.json())
      .then((data) => {
        setFavorites(data);
      })
  }, [updatePage])

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <Text style={[styles.header, styles.text]}>Favorite Pets</Text>
            {favorites.map((pet, index) => 
            <View style={styles.container} key={index}>
              <Image style={styles.image} source={{uri : pet.photo }} />
              <Text style={[styles.name,styles.text]}>{pet.name}</Text>
              <View style={styles.buttons}>
                <Text style={[styles.link, styles.text]} onPress={() => Linking.openURL(pet.url)}>ADOPT ME!</Text>
                <TouchableHighlight onPress= {()=> handleDetails(pet)}>
                  <Text style={[styles.link, styles.text]}>MORE INFO</Text>
                </TouchableHighlight>
                <Text style={[styles.link, styles.text]} onPress= {()=> handleDelete(pet)}>DELETE</Text>
              </View>
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
    textAlign: 'center',
    color: '#ffffff',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    width: 300,
    justifyContent: 'space-around',
  },
  link: {
    fontFamily: 'AmaticSC-Regular',
    fontSize: 20,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#ffffff',
    width: 75,
  },
  name: {
    margin: 5,
    fontSize: 30,
    fontFamily: 'AmaticSC-Bold',
  },
  header: {
    fontFamily: 'AmaticSC-Bold',
    fontSize: 40,
    margin: 10,
  },
  image: {
    width: 395,
    height: 400,
  },
});