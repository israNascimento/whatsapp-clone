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
        <View style={[styles.container, styles.containerSender]}>
          <View style={styles.sender}>
            <Text>{message}</Text>
            <Text style={styles.timeStamp}>{timeStamp}</Text>
          </View>
        </View>
      );
    }
    return (
      <View style={[styles.container, styles.containerReceiver]}>
        <View style={styles.receiver}>
          <Text>{message}</Text>
          <Text style={styles.timeStamp}>{timeStamp}</Text>
        </View>
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
  container: {
    marginTop: 5,
  },
  containerSender: {
    marginLeft: 40,
    marginRight: 15,
    alignItems: 'flex-end',
  },
  sender: {
    backgroundColor: '#dbf5b4',
    padding: 15,
    borderRadius: 10,
    elevation: 1,
  },
  containerReceiver: {
    marginRight: 40,
    marginLeft: 15,
    alignItems: 'flex-start',
  },
  receiver: {
    backgroundColor: '#f7f7f7',
    padding: 15,
    elevation: 1,
    borderRadius: 10,
  },
  timeStamp: {
    color: 'grey',
    fontSize: 10,
  },
});

export default Row;
