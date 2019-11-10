import React, { useEffect } from 'react';
import { Text } from 'react-native';
import GallerySwiper from "react-native-gallery-swiper";
import superagent from 'superagent';

const API = process.env.REACT_APP_API; 

export default function FavoritesScreen() {

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }
    fetch('http://localhost:3000/search/Dog/98103/15', options)
    .then((results) => results.json())
    .then((data) => console.log(data))
  })


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
