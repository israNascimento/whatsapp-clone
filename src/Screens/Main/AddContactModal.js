import React from 'react';
import {
  Modal, View, StyleSheet, Text,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeModalVisibility } from '../../Actions/MainAction';

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
          <Text>Ola mundo!</Text>
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
    flexDirection: 'column-reverse',
    backgroundColor: '#00000080',
  },
  inModal: {
    height: 200,
    backgroundColor: '#FFF',
    padding: 20,
  },
});
