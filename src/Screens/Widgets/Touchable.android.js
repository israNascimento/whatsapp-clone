import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';

const Touchable = (props) => {
  const {
    children, onPress, params, style,
  } = props;
  console.log(style);
  return (
    <TouchableNativeFeedback
      style={style}
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
  style: PropTypes.any,
};

Touchable.defaultProps = {
  params: null,
  style: {},
};

export default Touchable;
