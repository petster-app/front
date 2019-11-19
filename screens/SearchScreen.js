import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import GallerySwiper from 'react-native-gallery-swiper';
  
  export default function InputScreen() {
    
    const [tempData, setTempData] = useState([]);
    const [imagesTest, setImageTest] = useState([]);
    
    useEffect(() => {
      let options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      }
      fetch(`http://localhost:3000/search/Dog/98103/5`, options)
      .then((results) => results.json())
      .then((data) => data[0])
      .then((data) => {
        setTempData(data)
        const foo = [];
        data.map((pet, index) => {  
          if(pet.photos){
            foo.push({ url: pet.photos[0].medium});
          }
        });
        if(foo.length){
        setImageTest(foo);
        }
      })
  }, [])

  function saveToFavorites(event) {
    console.log('event', event);
    console.log(tempData[event]);
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tempData[event]),
    }
    fetch(`http://localhost:3000/favorites`, options)
    .then(() => {
      console.log('yayayay')
    })
  }

  return (
    <GallerySwiper
    images={imagesTest}
      initialPage={0}
      onPress={(event) => console.log('hi')}
      onSingleTapConfirmed={(event) => console.log('hi on tap')}
      onEndReached={(event) => console.log('end reached')}
      onDoubleTapConfirmed={(event) => {
        saveToFavorites(event);
        }
      }
    />
  );

}
