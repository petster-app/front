import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import GallerySwiper from "react-native-gallery-swiper";

export default function InputScreen() {

  useEffect(() => {
    let options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }
    fetch(`http://localhost:3000/search/Rabbit/98103/5`, options)
    .then((results) => results.json())
    .then((data) => {
      let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      fetch(`http://localhost:3000/temp-pets`, options)
      .then(console.log('IT WORKED!'))
    })
  })

  return (
    <Text>Hi</Text>
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