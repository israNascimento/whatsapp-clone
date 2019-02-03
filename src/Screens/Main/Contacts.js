import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { contactsFetchAction } from '../../Actions/ContactAction';

class Contacts extends Component {
  componentWillMount() {
    const { contactsFetch } = this.props;
    contactsFetch();
  }

  render() {
    return (
      <View style={{ backgroundColor: '#f00', flex: 1 }}>
        <Text>Adeus mundo!</Text>
      </View>
    );
  }
}

Contacts.propTypes = {
  contactsFetch: PropTypes.func.isRequired,
};

Contacts.navigationOptions = {
  title: 'Contatos',
};

export default connect(null, {
  contactsFetch: contactsFetchAction,
})(Contacts);
