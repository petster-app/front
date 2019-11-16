import React from 'react';
import { Text, View, Button } from 'react-native';

export default function HomeScreen(props) {

  function handleSubmit(event) {
    props.navigation.navigate('InputScreen');
  }

  return (
    <View>
      <Text>
        Welcome to petster!
      </Text>
      <Button title="Go to input page" onPress={handleSubmit}/>
    </View>
  );
}
