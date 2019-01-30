import React from 'react';
import { View, Text } from 'react-native';

const blue = () => (
  <View style={{ backgroundColor: '#00F', flex: 1 }}>
    <Text>Ola mundo!</Text>
  </View>
);

blue.navigationOptions = {
  title: 'Conversas',
};

export default blue;
