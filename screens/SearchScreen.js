import React, { useEffect, useState } from 'react';
import { Text, Picker, View, Button, TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import GallerySwiper from "react-native-gallery-swiper";
import superagent from 'superagent';

const API = process.env.REACT_APP_API; 

export default function FavoritesScreen() {

  const [type, setType] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [travelDistance, setTravelDistance] = useState('');

  // const MainNavigator = createStackNavigator({
  //   Home : {screen: HomeScreen}
  // })

  console.log(type,zipCode,travelDistance);

  function handleSubmit() {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }
    fetch(`http://localhost:3000/search/${type}/${zipCode}/${travelDistance}`, options)
    .then((results) => results.json())
    .then((data) => console.log(data))
    .then((data) => navigate('HomeScreen'))
  }

  return (
    <View>
      <Picker style={{width: '50%'}} selectedValue={type} onValueChange={(value) => {
       setType(value);
       }}>
        <Picker.Item label="Dog" value="Dog"/>
        <Picker.Item label="Cat" value="Cat"/>
        <Picker.Item label="Rabbit" value="Rabbit"/>
      </Picker>

      <TextInput
      placeholder="Your zip code"
      maxLength={5} onChangeText={(value) => {
        setZipCode(value);
        }}/>

      <Picker style={{width: '50%'}} selectedValue={travelDistance} onValueChange={(value) => {
      setTravelDistance(value);
      }}>
        <Picker.Item label="5-miles" value="5"/>
        <Picker.Item label="15-miles" value="15"/>
        <Picker.Item label="25+ miles" value="25"/>
      </Picker>
      <Button title="Submit" onPress={handleSubmit}/>
    </View>
    
    // <GallerySwiper
    //   images={[
    //     { url: "https://loremflickr.com/1080/1920/dog" },
    //     { url: "https://loremflickr.com/1080/1920/cat" },
    //     { url: "https://loremflickr.com/1081/1920/dog" },
    //     { url: "https://loremflickr.com/1081/1920/cat" },
    //     { url: "https://loremflickr.com/1082/1920/dog" },
    //     { url: "https://loremflickr.com/1082/1920/cat" },
    //   ]}
    // />
  );

}

