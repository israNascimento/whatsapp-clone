import React, { Component } from 'react';
import { Header } from 'react-navigation';
import {
  View, TextInput, StyleSheet, Button, KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import defaultStyle from '../../styles';
import {
  changeMessageTextAction, sendMessageAction,
} from '../../../Actions/ChatAction';

class Chat extends Component {
  sendMessage() {
    const { chatTextInput, sendMessage, navigation } = this.props;
    const { params } = navigation.state;
    console.log(params);
    sendMessage(chatTextInput, { ...params });
  }

  render() {
    console.log(this.props);
    const { chatTextInput, changeText } = this.props;
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
              value={chatTextInput}
              onChangeText={text => changeText(text)}
              style={[defaultStyle.input, styles.textInput]}
              placeholder="Digite sua mensagem... "
            />
            <Button title="Enviar" onPress={() => this.sendMessage()} />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

Chat.propTypes = {
  chatTextInput: PropTypes.string.isRequired,
  changeText: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

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

const mapStateToProps = state => ({
  chatTextInput: state.chat.textInput,
});

export default connect(mapStateToProps, {
  changeText: changeMessageTextAction,
  sendMessage: sendMessageAction,
})(Chat);
