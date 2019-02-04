import React, { Component } from 'react';
import { Header } from 'react-navigation';
import {
  View, TextInput, StyleSheet, Button, KeyboardAvoidingView, FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import defaultStyle from '../../styles';
import {
  changeMessageTextAction, sendMessageAction, fetchMessagesAction,
} from '../../../Actions/ChatAction';
import Row from './Row';

class Chat extends Component {
  constructor(props) {
    super(props);
    const { fetchMessage, navigation } = props;
    const { uid } = navigation.state.params;
    fetchMessage(uid);
  }

  componentWillReceiveProps(nextProps) {
    this.setDataSource(nextProps);
  }

  setDataSource(data) {
    const { chatList } = data;
    console.log(chatList);
    this.dataSource = chatList;
  }

  sendMessage() {
    const { chatTextInput, sendMessage, navigation } = this.props;
    const { params } = navigation.state;
    sendMessage(chatTextInput, { ...params });
  }

  render() {
    const { chatTextInput, changeText } = this.props;
    // this.setDataSource(this.props);
    console.log(this.dataSource);
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={Header.HEIGHT + 25}
        style={{ flex: 1, backgroundColor: 'green' }}
        behavior="padding"
      >
        <View style={styles.container}>
          <FlatList
            data={this.dataSource}
            renderItem={({ item }) => <View />}
          />
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
  fetchMessage: PropTypes.func.isRequired,
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
  chatList: state.chat.chatList,
});

export default connect(mapStateToProps, {
  changeText: changeMessageTextAction,
  sendMessage: sendMessageAction,
  fetchMessage: fetchMessagesAction,
})(Chat);
