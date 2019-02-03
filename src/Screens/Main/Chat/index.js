import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Chat extends Component {
  ignore() {
    this.a = 1;
  }

  render() {
    console.log();
    return (
      <View>
        <Text>Ola mundo!</Text>
      </View>
    );
  }
}

export default Chat;
