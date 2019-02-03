import React from 'react';
import { TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

const Touchable = (props) => {
  const { children, onPress, params } = props;
  return (
    <TouchableHighlight onPress={() => onPress(params)}>
      {children}
    </TouchableHighlight>
  );
};

Touchable.propTypes = {
  children: PropTypes.element.isRequired,
  onPress: PropTypes.func.isRequired,
  params: PropTypes.any,
};

Touchable.defaultProps = {
  params: null,
};

export default Touchable;
