import firebase from 'firebase';
import _ from 'lodash';
import * as Constants from '../Constants/ChatList';

export const chatsFetchAction = () => {
  const currentUserUID = firebase.auth().currentUser.uid;
  return ((dispatch) => {
    firebase.database().ref(`messages/${currentUserUID}`)
      .on('value', (snapshot) => {
        const snapArray = _.toArray(_.map(snapshot.val(), (value, key) => ({
          ...value,
          uid: key,
        })));
        dispatch({ type: Constants.CHAT_LIST, payload: snapArray });
      });
  });
};

export const ignore = 1;
