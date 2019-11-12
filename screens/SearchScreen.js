import React, { useEffect, useState } from 'react';
import GallerySwiper from "react-native-gallery-swiper";

export default function InputScreen() {


  function callAPI() {
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
    <GallerySwiper
      images={[
        { url: "https://loremflickr.com/1080/1920/dog" },
        { url: "https://loremflickr.com/1080/1920/cat" },
        { url: "https://loremflickr.com/1081/1920/dog" },
        { url: "https://loremflickr.com/1081/1920/cat" },
        { url: "https://loremflickr.com/1082/1920/dog" },
        { url: "https://loremflickr.com/1082/1920/cat" },
      ]}
    />
  );

}