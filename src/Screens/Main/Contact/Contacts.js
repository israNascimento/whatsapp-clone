import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { contactsFetchAction } from '../../../Actions/ContactAction';
import Row from './Row';

class Contacts extends Component {
  componentWillMount() {
    const { contactsFetch } = this.props;
    contactsFetch();
    this.setDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setDataSource(nextProps);
  }

  setDataSource(data) {
    const { contacts } = data;
    this.dataSource = contacts;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.dataSource}
          extraData={this.dataSource}
          renderItem={({ item }) => <Row {...item} />}
          keyExtractor={item => item.uid}
        />
      </View>
    );
  }
}

Contacts.propTypes = {
  contactsFetch: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Contacts.navigationOptions = {
  title: 'Contatos',
};

const mapStateToProps = (state) => {
  const contacts = _.map(state.contacts.list, (val, uid) => ({ ...val, uid }));
  return {
    contacts,
  };
};

export default connect(mapStateToProps, {
  contactsFetch: contactsFetchAction,
})(Contacts);
