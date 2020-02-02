import React, { useEffect, useState } from 'react';
import {Text, Picker, View, Button, TextInput, Slider, StyleSheet} from 'react-native';


export default function FavoritesScreen(props) {

  const [type, setType] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [travelDistance, setTravelDistance] = useState(10);
  
  function handleSubmit() {
    props.navigation.navigate('SearchScreen', {type: type, zipCode: zipCode, travelDistance: travelDistance});
  }

  function handleSlider(travelDistance) {
    setTravelDistance(travelDistance);
  }

  return (
    <View style={styles.container}>
       <Text style={styles.text}>Choose your animal</Text>
      <Picker style={styles.picker} selectedValue={type} onValueChange={(value) => setType(value)}>
        <Picker.Item color="#ffffff" label="Dog" value="Dog"/>
        <Picker.Item color="#ffffff" label="Cat" value="Cat"/>
        <Picker.Item color="#ffffff" label="Rabbit" value="Rabbit"/>
      </Picker>


      <Text style={styles.text}>Enter your zip code</Text>
      <TextInput style={styles.input} placeholder='' maxLength={5} onChangeText={(value) => {
        setZipCode(value);
        }}/>

      <Text style={styles.text}>{String ('Search within ' + travelDistance + ' miles')}</Text>
      <Slider
        step={5}
        maximumValue={100}
        onValueChange={handleSlider}
        value={travelDistance}
      />

      <Button style={{position: 'absolute', bottom: '5%' }} title="Submit" onPress={handleSubmit}/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#003366',
  },
  text: { 
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff',
  },
  picker: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff',
  },
  input: {
    height: 40,
    margin: 20,
    padding: 10,
    color: '#ffffff',
    borderColor: 'gray',
    borderWidth: 1
  }
});

