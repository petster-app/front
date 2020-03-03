import React, { useState } from 'react';
import {Text, Picker, View, TextInput, Slider, StyleSheet, TouchableHighlight} from 'react-native';


export default function FavoritesScreen(props) {

  const [type, setType] = useState('cat');
  const [zipCode, setZipCode] = useState('98105');
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
      <Picker itemStyle={styles.picker} style={styles.picker} selectedValue={type} onValueChange={(value) => setType(value)}>
        <Picker.Item label="Dog" value="Dog"/>
        <Picker.Item label="Cat" value="Cat"/>
        <Picker.Item label="Rabbit" value="Rabbit"/>
      </Picker>


      <Text style={styles.text}>Enter your zip code</Text>
      <TextInput style={styles.input} maxLength={5} onChangeText={(value) => {
        setZipCode(value);
        }}/>

      <Text style={styles.text}>{String ('Search within ' + travelDistance + ' miles')}</Text>
      <Slider
        step={5}
        maximumValue={100}
        onValueChange={handleSlider}
        value={travelDistance}
      />
      <TouchableHighlight onPress={handleSubmit}>
        <Text style={styles.submit}>Submit</Text>
      </TouchableHighlight>
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
    fontSize: 35,
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'AmaticSC-Regular',
  },
  submit: { 
    fontSize: 35,
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'AmaticSC-Regular',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#ffffff',
  },
  picker: {
    fontSize: 25,
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'AmaticSC-Regular',
  },
  input: {
    height: 40,
    margin: 20,
    padding: 10,
    fontSize: 25,
    color: '#ffffff',
    borderColor: 'gray',
    textAlign: 'center',
    borderWidth: 1,
    fontFamily: 'AmaticSC-Regular',
  }
});

