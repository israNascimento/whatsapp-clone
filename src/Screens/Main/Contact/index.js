import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
          renderItem={({ item }) => <Row {...item} />}
          keyExtractor={item => item.uid}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: 'grey',
  },
});

Contacts.propTypes = {
  contactsFetch: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Contacts.navigationOptions = {
  title: 'Contatos',
};

const mapStateToProps = state => ({
  contacts: state.contacts.list,
});

export default connect(mapStateToProps, {
  contactsFetch: contactsFetchAction,
})(Contacts);
