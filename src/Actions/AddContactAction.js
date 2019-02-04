import firebase from 'firebase';
import _ from 'lodash';
import * as Constants from '../Constants/AddContactConst';

export const changeModalVisibilityAction = visibility => ({
  type: Constants.MODAL_VISIBILITY,
  payload: visibility,
});

export const changeContactTextAction = text => ({
  type: Constants.CHANGE_ADD_CONTACT_TEXT,
  payload: text,
});

export const addContactAction = email => (
  (dispatch) => {
    dispatch({ type: 'loading...' });
    firebase.database().ref('users/').orderByChild('email')
      .equalTo(email)
      .once('value')
      .then((snapshot) => {
        if (snapshot.val() != null) {
          const { uid } = firebase.auth().currentUser;
          const userData = _.first(_.map(snapshot.val(), (value, key) => ({
            ...value,
            uid: key,
          })));
          firebase.database().ref(`contacts/${uid}/${userData.uid}`).set({
            email: userData.email,
            name: userData.name,
          })
            .then(() => dispatch({ type: Constants.ADD_CONTACT_SUCESS }))
            .catch(error => dispatch({
              type: Constants.ADD_CONTACT_ERROR,
              payload: error.message,
            }));
        } else {
          dispatch({
            type: Constants.ADD_CONTACT_ERROR,
            payload: 'Usuário não encontrado',
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: Constants.ADD_CONTACT_ERROR,
          payload: error.message,
        });
      });
  }
);
