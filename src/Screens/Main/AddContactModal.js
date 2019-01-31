import React from 'react';
import {
  Modal, View, StyleSheet, Text, TextInput, Button,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeModalVisibility } from '../../Actions/MainAction';
import defaultStyles from '../styles';

const AddContactModal = (props) => {
  const { isModalVisible, changeVisibility } = props;
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
          <TextInput style={defaultStyles.input} placeholder="Email" />
          <Button title="Adicionar" color="#115E54" onPress={() => null} />
        </View>
      </View>
    </Modal>
  );
};

AddContactModal.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  changeVisibility: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isModalVisible: state.main.isModalVisible,
});

export default connect(mapStateToProps, {
  changeVisibility: changeModalVisibility,
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
