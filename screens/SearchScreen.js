import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import GallerySwiper from 'react-native-gallery-swiper';
import Swiper from 'react-native-swipe-image';
import { BottomTabBar } from 'react-navigation';

let mockData = [
  {
      "type": "WEEEEEEE",
      "name": "Merida",
      "age": "Young",
      "gender": "Female",
      "size": "Medium",
      "city": "Orange",
      "state": "CA",
      "description": "Very sweet, she gets along with other dogs",
      "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45078342/1/?bust=1561486424",
      "url": "https://www.petfinder.com/dog/spot-120/nj/jersey-city/nj333-petfinder-test-account/?referrer_id=d7e3700b-2e07-11e9-b3f3-0800275f82b1"
  },
  {
      "type": "WEEE2",
      "name": "Adele",
      "age": "Senior",
      "gender": "Female",
      "size": "Large",
      "city": "Seattle",
      "state": "WA",
      "description": "**Important Note** You won & #39;t find this kitty at the shelter. This kitty is waiting patiently in foster care for your...",
      "photo": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/45078342/1/?bust=1561486424",
      "url": "https://www.petfinder.com/cat/adele-43855423/wa/seattle/seattle-animal-shelter-wa27/?referrer_id=37b70a69-da7e-4bee-9150-834f1b2aea8b"
  }] 
  
  export default function InputScreen() {
    
    const [data, setData] = useState([])
    let imagesTest = [];
    
    
    useEffect(() => {
      let options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      }
      setData(mockData)
      data.map((pet, index) => {
        
        imagesTest.push({ url: pet.photo});
      });

    // fetch(`http://localhost:3000/search/Rabbit/98103/5`, options)
    // .then((results) => results.json())
    // .then((data) => console.log('data:', data))

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
      //initialPage={0}
      onPress={(event) => console.log('hi')}
      onSingleTapConfirmed={(event) => console.log('hi on tap')}
      onEndReached={(event) => console.log('end reached')}
      onDoubleTapConfirmed={(event) => {
        console.log('2 tap ')
        }
      }
    />
      //  <View style={{ flex: 1 }}>
      //   <Swiper
      //     images={mockPhotos2}
      //     imageHeight={820}
      //     swipeTop={(e) => bottom(e)}
      //     textSize={10}
      //     textBold={true}
      //     textColor={'blue'}
      //     textUnderline={false}
      //   />
      // </View>
  );

}
