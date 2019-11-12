import React, { useEffect, useState } from 'react';
import { Text, Picker, View, Button } from 'react-native';
import GallerySwiper from "react-native-gallery-swiper";
import superagent from 'superagent';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

const API = process.env.REACT_APP_API; 

export default function FavoritesScreen() {

  const [type, setType] = useState('');
  const [travelDistance, setTravelDistance] = useState('');
  console.log(type)

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }
    fetch('http://localhost:3000/search/Dog/98103/15', options)
    .then((results) => results.json())
    // .then((data) => console.log(data))
  })




  return (
    <View>
      <Picker style={{width: '50%'}} selectedValue={type}             onValueChange={(itemValue, itemIndex) => {
       setType(itemValue);
       }}>
        <Picker.Item label="Dog" value="Dog"/>
        <Picker.Item label="Cat" value="Cat"/>
        <Picker.Item label="Rabbit" value="Rabbit"/>
      </Picker>

      <Picker style={{width: '50%'}} selectedValue={type} onValueChange={(itemValue, itemIndex) => {
      setType(itemValue);
      }}>
        <Picker.Item label="5-miles" value="5"/>
        <Picker.Item label="15-miles" value="15"/>
        <Picker.Item label="25+ miles" value="25"/>
      </Picker>
      
      <Button title="Submit"/>
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

