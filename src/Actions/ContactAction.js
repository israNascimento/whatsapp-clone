import firebase from 'firebase';
import _ from 'lodash';
import * as Constants from '../Constants/ContactsConst';

export const contactsFetchAction = () => {
  const currentUserUID = firebase.auth().currentUser.uid;
  return ((dispatch) => {
    firebase.database().ref(`contacts/${currentUserUID}`)
      .on('value', (snapshot) => {
        const snapArray = _.toArray(_.map(snapshot.val(), (value, key) => ({
          ...value,
          uid: key,
        })));
        dispatch({ type: Constants.CONTACT_LIST, payload: snapArray });
      });
  });
};

export const ignore = 1;
