import React, { Component } from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

class Row extends Component {
  renderView() {
    const { type, message, timeStamp } = this.props;
    if (type === 'send') {
      return (
        <View style={[styles.containerSender, styles.sender]}>
          <Text>{message}</Text>
          <Text style={styles.timeStamp}>{timeStamp}</Text>
        </View>
      );
    }
    return (
      <View style={styles.containerReceiver}>
        <Text style={styles.receiver}>{message}</Text>
        <Text style={styles.timeStamp}>{timeStamp}</Text>
      </View>
    );
  }

  render() {
    return (
      this.renderView()
    );
  }
}

Row.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  containerSender: {
    marginLeft: 40,
    marginRight: 5,
    marginTop: 5,
    alignItems: 'flex-end',
  },
  sender: {
    backgroundColor: '#dbf5b4',
    padding: 15,
    elevation: 1,
  },
  containerReceiver: {
    marginRight: 40,
    marginLeft: 5,
    marginTop: 5,
    alignItems: 'flex-start',
  },
  receiver: {
    backgroundColor: '#f7f7f7',
    padding: 15,
    elevation: 1,
  },
  timeStamp: {
    color: 'grey',
    fontSize: 10,
  },
});

export default Row;
