import firebase from 'firebase';
import * as Constants from '../Constants/ContactsConst';

export const contactsFetchAction = () => {
  const currentUserUID = firebase.auth().currentUser.uid;
  return ((dispatch) => {
    firebase.database().ref(`contacts/${currentUserUID}`)
      .on('value', (snapshot) => {
        dispatch({ type: Constants.CONTACT_LIST, payload: snapshot.val() });
      });
  });
};

export const ignore = 1;
