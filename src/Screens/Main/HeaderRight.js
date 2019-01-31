import React from 'react';
import {
  Image, View, Text, StyleSheet, TouchableHighlight,
} from 'react-native';

export default () => (
  <View style={style.view}>
    <TouchableHighlight
      style={style.image}
      onPress={() => null}
      underlayColor="#114D44"
    >
      <Image
        source={require('../../imgs/add-contact.png')}
      />
    </TouchableHighlight>
    <Text style={style.text}>SAIR</Text>
  </View>
);

const style = StyleSheet.create({
  view: {
    flexDirection: 'row',
    marginRight: 10,
  },
  image: {
    marginRight: 15,
  },
  text: {
    fontSize: 17,
    color: '#FFF',
  },
});
