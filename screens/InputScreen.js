import React, { useEffect, useState } from 'react';
import {Text, Picker, View, Button, TextInput, Slider, StyleSheet} from 'react-native';
import SearchScreen from './SearchScreen';

export default function FavoritesScreen(props) {

  const [type, setType] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [travelDistance, setTravelDistance] = useState(10);
  
  function handleSubmit() {
    props.navigation.navigate('SearchScreen');
  }

  function handleSlider(travelDistance) {
    setTravelDistance(travelDistance);
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

      <Text style={styles.text}>{String ('Search within ' + travelDistance + ' miles')}</Text>
      <Slider
        step={5}
        maximumValue={100}
        onValueChange={handleSlider}
        value={travelDistance}
      />

      <Button title="Submit" onPress={handleSubmit}/>
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