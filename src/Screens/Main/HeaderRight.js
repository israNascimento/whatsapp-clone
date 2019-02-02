import React from 'react';
import {
  Image, View, Text, StyleSheet, TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeModalVisibilityAction } from '../../Actions/AddContactAction';
import AddContactModal from './AddContactModal';

const HeaderRight = props => (
  <View>
    <AddContactModal />
    <View style={style.viewHeader}>
      <TouchableHighlight
        style={style.imageHeader}
        onPress={() => props.changeModalVisibility(true)}
        underlayColor="#114D44"
      >
        <Image
          source={require('../../imgs/add-contact.png')}
        />
      </TouchableHighlight>
      <Text style={style.textHeader}>SAIR</Text>
    </View>
  </View>
);

HeaderRight.propTypes = {
  changeModalVisibility: PropTypes.func.isRequired,
};


export default connect(null, {
  changeModalVisibility: changeModalVisibilityAction,
})(HeaderRight);

const style = StyleSheet.create({
  viewHeader: {
    flexDirection: 'row',
    marginRight: 10,
  },
  imageHeader: {
    marginRight: 15,
  },
  textHeader: {
    fontSize: 17,
    color: '#FFF',
  },
});
