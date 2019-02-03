import React from 'react';
import {
  Image, View, Text, StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeModalVisibilityAction } from '../../Actions/AddContactAction';
import AddContactModal from './AddContactModal';
import Touchable from '../Widgets/Touchable';

const HeaderRight = props => (
  <View>
    <AddContactModal />
    <View style={style.viewHeader}>
      <Touchable
        onPress={() => props.changeModalVisibility(true)}
      >
        <Image
          style={style.imageHeader}
          source={require('../../imgs/add-contact.png')}
        />
      </Touchable>
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
