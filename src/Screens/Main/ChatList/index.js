import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { chatsFetchAction } from '../../../Actions/ChatListAction';
import Row from './Row';

class ChatList extends Component {
  componentWillMount() {
    const { chatFetch } = this.props;
    chatFetch();
    this.setDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setDataSource(nextProps);
  }

  setDataSource(data) {
    const { lista } = data;
    this.dataSource = lista;
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

ChatList.propTypes = {
  chatFetch: PropTypes.func.isRequired,
  lista: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ChatList.navigationOptions = {
  title: 'Chats',
};

const mapStateToProps = state => ({
  lista: state.chatList.lista,
});


export default connect(mapStateToProps, {
  chatFetch: chatsFetchAction,
})(ChatList);
