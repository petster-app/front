import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import PetProfile from '../components/PetProfile';
import heart from '../assets/images/icon.png'
import { UserInterfaceIdiom } from 'expo-constants';
  
  export default function InputScreen(props) {
    const user = 'Bob';
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
      // fetch(`https://petster3-back-end.herokuapp.com/search/${type}/${zipCode}/${travelDistance}`, options)
      // MOCK
      fetch(`https://petster3-back-end.herokuapp.com/search/dog/98103/10`, options)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
       setTempData(data[0]);
      })
  }, [type, zipCode, travelDistance]);

  function onSwipeLeft() {
    console.log('you swiped left');
    if (currentPet + 1 < tempData.length) {
      setCurrentPet(currentPet + 1);
    }
  }

  function onSwipeRight() {
    console.log('you swiped right');
    if (currentPet > 0) {
      setCurrentPet(currentPet - 1);
    }
  }

  function handleLike() {
    console.log('you swiped up');
    let data = tempData[currentPet];
    data.userName = user;
    let options = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }
    fetch(`https://petster3-back-end.herokuapp.com/favorites`, options)
    .then((result) => {
    })
  }

  return (
    <>
      <View style={styles.container}>
        <GestureRecognizer
        onSwipeUp={handleLike}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
        >
          { tempData.length ? <PetProfile pet={tempData[currentPet]} /> : null}
        </GestureRecognizer>
      </View>

      {/*<Image class='heart' source={heart} width="20" height="50" />*/}
    </>
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
