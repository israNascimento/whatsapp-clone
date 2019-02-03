import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import Touchable from '../../Widgets/Touchable';
import Navigator from '../../../NavigationService';

const Row = (props) => {
  const { name, email } = props;
  console.log(props);
  return (
    <Touchable onPress={() => Navigator.navigate('Chat')}>
      <View style={styles.container}>
        <Text style={[styles.text, styles.name]}>{name.toUpperCase()}</Text>
        <Text style={[styles.text, styles.email]}>{email}</Text>
      </View>
    </Touchable>
  );
};

Row.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string.isRequired,
};
Row.defaultProps = {
  name: 'Nome não declarado',
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
