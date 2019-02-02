import React from 'react';
import {
  Modal, View, StyleSheet, Text, TextInput, Button,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  changeModalVisibilityAction, changeContactTextAction, addContactAction,
} from '../../Actions/AddContactAction';
import defaultStyles from '../styles';

const AddContactModal = (props) => {
  const {
    isModalVisible,
    addContactText, changeContactText, errorText,
    addContact, changeVisibility,
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
          <Text style={defaultStyles.errorMessage}>{errorText}</Text>
          <Button
            title="Adicionar"
            color="#115E54"
            onPress={() => addContact(addContactText)}
          />
        </View>
      </View>
    </Modal>
  );
};

AddContactModal.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  addContactText: PropTypes.string.isRequired,
  errorText: PropTypes.string.isRequired,
  changeContactText: PropTypes.func.isRequired,

  changeVisibility: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isModalVisible: state.addContacts.isModalVisible,
  addContactText: state.addContacts.addContactText,
  errorText: state.addContacts.addContactErrorText,
});

export default connect(mapStateToProps, {
  changeVisibility: changeModalVisibilityAction,
  changeContactText: changeContactTextAction,
  addContact: addContactAction,
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
