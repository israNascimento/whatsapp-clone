import firebase from 'firebase';
import * as Constants from '../Constants/AppConst';

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
    firebase.database().ref('contatos/users/').orderByChild('email')
      .equalTo(email)
      .once('value')
      .then((snapshot) => {
        if (snapshot.val() != null) {
          dispatch({ type: 'Contatos...', payload: JSON.stringify(snapshot) });
        } else {
          dispatch({
            type: Constants.ADD_CONTACT_ERROR,
            payload: 'Usuário não encontrado',
          });
        }
      })
      .catch((error) => {
        dispatch({ type: 'Error...', payload: error });
      });
  }
);
