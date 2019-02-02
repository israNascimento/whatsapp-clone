import React from 'react';
import {
  Modal, View, StyleSheet, Text, TextInput, Button,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  changeModalVisibilityAction, changeContactTextAction,
} from '../../Actions/MainAction';
import defaultStyles from '../styles';

const AddContactModal = (props) => {
  const {
    isModalVisible, changeVisibility, addContactText, changeContactText,
  } = props;
  return (
    <Modal
      animationType="fade"
      transparent
      visible={isModalVisible}
      onRequestClose={() => changeVisibility(false)}
    >
      <View style={style.outModal}>
        <View style={style.inModal}>
          <Text>ADICIONAR CONTATOS</Text>
          <TextInput
            style={defaultStyles.input}
            value={addContactText}
            onChangeText={text => changeContactText(text)}
            placeholder="Email"
          />
          <Button title="Adicionar" color="#115E54" onPress={() => null} />
        </View>
      </View>
    </Modal>
  );
};

AddContactModal.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  addContactText: PropTypes.string.isRequired,

  changeVisibility: PropTypes.func.isRequired,
  changeContactText: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isModalVisible: state.main.isModalVisible,
  addContactText: state.main.addContactText,
});

export default connect(mapStateToProps, {
  changeVisibility: changeModalVisibilityAction,
  changeContactText: changeContactTextAction,
})(AddContactModal);

const style = StyleSheet.create({
  outModal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080',
  },
  inModal: {
    width: 300,
    backgroundColor: '#FFF',
    padding: 20,
    flexDirection: 'column',
  },
});
