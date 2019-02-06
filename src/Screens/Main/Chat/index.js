import React, { Component } from 'react';
import { Header } from 'react-navigation';
import {
  View, TextInput, StyleSheet, Image, KeyboardAvoidingView, FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import defaultStyle, { PRIMARY_COLOR } from '../../styles';
import {
  changeMessageTextAction, sendMessageAction, fetchMessagesAction,
} from '../../../Actions/ChatAction';
import Row from './Row';
import Touchable from '../../Widgets/Touchable';

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
    this.dataSource = chatList;
  }

  sendMessage() {
    const { chatTextInput, sendMessage, navigation } = this.props;
    const { params } = navigation.state;
    sendMessage(chatTextInput, { ...params });
  }

  render() {
    const { chatTextInput, changeText, navigation } = this.props;
    const { name } = navigation.state.params;
    console.log(styles.sendButton);
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={Header.HEIGHT + 25}
        style={{ flex: 1, backgroundColor: '#E4DED3' }}
        behavior="padding"
      >
        <View style={styles.container}>
          <FlatList
            data={this.dataSource}
            renderItem={({ item }) => <Row {...item} name={name} />}
            keyExtractor={item => item.messageId}
          />
          <View style={styles.inputContainer}>
            <TextInput
              value={chatTextInput}
              onChangeText={text => changeText(text)}
              style={[defaultStyle.input, styles.textInput]}
              underlineColorAndroid="transparent"
              placeholder="Digite sua mensagem... "
            />
            <Touchable
              onPress={() => this.sendMessage()}
            >
              <View
                style={styles.sendButton}
              >
                <Image
                  style={styles.image}
                  source={require('../../../imgs/send.png')}
                />
              </View>
            </Touchable>
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
  },
  inputContainer: {
    margin: 10,
    flexDirection: 'row',
    height: 48,
  },
  textInput: {
    backgroundColor: 'white',
    flex: 1,
    marginRight: 10,
    padding: 10,
    fontSize: 16,
    borderRadius: 23,
  },
  image: {
    width: 48,
    height: 48,
  },
  sendButton: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 24,
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
