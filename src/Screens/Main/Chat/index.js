import React, { Component } from 'react';
import { Header } from 'react-navigation';
import {
  View, TextInput, StyleSheet, Button, KeyboardAvoidingView,
} from 'react-native';
import defaultStyle from '../../styles';

class Chat extends Component {
  ignore() {
    this.a = 1;
  }

  render() {
    console.log();
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={Header.HEIGHT + 25}
        style={{ flex: 1, backgroundColor: 'green' }}
        behavior="padding"
      >
        <View style={styles.container}>
          <View style={styles.messages} />
          <View style={styles.inputContainer}>
            <TextInput
              style={[defaultStyle.input, styles.textInput]}
              placeholder="Digite seu texto"
            />
            <Button title="Enviar" onPress={() => false} />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messages: {
    flex: 10,
    backgroundColor: 'red',
  },
  inputContainer: {
    margin: 5,
    flexDirection: 'row',
    height: 45,
  },
  textInput: {
    backgroundColor: 'white',
    flex: 1,
    marginRight: 10,
  },
});

export default Chat;
