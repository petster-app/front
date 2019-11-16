import React, {useState} from 'react';
import {StyleSheet, Text, View, Slider} from 'react-native';

export default function slider () {
  const [travelDistance, setTravelDistance] = useState(5);

  function handleSlider(travelDistance) {
    setTravelDistance(travelDistance)
  }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{String ('Search within ' + travelDistance + ' miles')}</Text>
        <Slider
          step={5}
          maximumValue={100}
          onValueChange={handleSlider}
          value={travelDistance}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    fontSize: 35,
    textAlign: 'center',
  },
});