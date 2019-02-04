import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import Touchable from '../../Widgets/Touchable';
import Navigator from '../../../NavigationService';

const Row = (props) => {
  const { otherName, otherEmail, uid } = props;
  console.log(props);
  return (
    <Touchable
      onPress={() => Navigator.navigate('Chat', { name: otherName, uid })}
    >
      <View style={styles.container}>
        <Text style={[styles.text, styles.name]}>
          {otherName.toUpperCase()}
        </Text>
        <Text style={[styles.text, styles.email]}>{otherEmail}</Text>
      </View>
    </Touchable>
  );
};

Row.propTypes = {
  otherName: PropTypes.string,
  otherEmail: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
};
Row.defaultProps = {
  otherName: 'Nome não declarado',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'column',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    fontWeight: 'normal',
    color: 'grey',
    fontStyle: 'italic',
  },
});

export default Row;
