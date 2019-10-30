import React from 'react';
import GallerySwiper from "react-native-gallery-swiper";

export default function FavoritesScreen() {

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
