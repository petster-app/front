import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableHighlight, Button, Animated } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import PetProfile from '../components/PetProfile';

  
  export default function InputScreen(props) {
    
    const [tempData, setTempData] = useState([]);
    const [petImages, setPetImages] = useState([]);
    const [currentPet, setCurrentPet] = useState(0);
    const [likedPets, setLikedPets] = useState([]);
    let type = props.navigation.getParam('type');
    let zipCode = props.navigation.getParam('zipCode');
    let travelDistance = props.navigation.getParam('travelDistance');
    console.log(type, zipCode, travelDistance);
    
    useEffect(() => {
  

      let options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      }
      // fetch(`http://localhost:3000/search/${type}/${zipCode}/${travelDistance}`, options)
      // MOCK
      fetch(`http://localhost:3000/search/dog/98103/10`, options)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
       setTempData(data[0]);
      })
  }, [type, zipCode, travelDistance]);

  function onSwipeLeft() {
    console.log('you swiped left');
    setCurrentPet(currentPet+1);
  }

  function onSwipeRight() {
    console.log('you swiped right');
    setCurrentPet(currentPet-1);
  }

  function handleLike() {
    console.log('handle like', tempData[currentPet]);
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tempData[currentPet]),
    }
    fetch(`http://localhost:3000/favorites`, options)
    .then((result) => {
      console.log(result)
    })
  }

  return ( 
      <View style={styles.container}>
        <GestureRecognizer
        onSwipeUp={handleLike}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
        >
          { tempData.length ? <PetProfile pet={tempData[currentPet]} /> : null}
        </GestureRecognizer>
      </View>
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
    fontFamily: 'AmaticSC-Regular',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
});
