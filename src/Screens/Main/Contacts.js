import React from 'react';
import { View, Text } from 'react-native';

const red = () => (
  <View style={{ backgroundColor: '#f00', flex: 1 }}>
    <Text>Adeus mundo!</Text>
  </View>
);

red.navigationOptions = {
  title: 'Contatos',
};

export default red;
