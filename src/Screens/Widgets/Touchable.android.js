import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';

const Touchable = (props) => {
  const { children, onPress, params } = props;
  return (
    <TouchableNativeFeedback
      onPress={() => onPress(params)}
    >
      {children}
    </TouchableNativeFeedback>
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
