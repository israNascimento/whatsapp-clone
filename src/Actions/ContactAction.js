import firebase from 'firebase';
import * as Constants from '../Constants/ContactsConst';

export const contactsFetch = () => {
  const currentUserEmail = firebase.auth().currentUser.email;
  return ((dispatch) => {
    firebase.database().ref(`contacts/${currentUserEmail}`)
      .on('value', (snapshot) => {
        dispatch({ type: Constants.CONTACT_LIST, payload: snapshot.data() });
      });
  });
};

export const ignore = 1;
