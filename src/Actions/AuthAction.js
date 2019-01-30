import firebase from 'firebase';
import Navigator from '../NavigationService';
import * as Constants from '../Constants/AuthConst';

export const changeEmail = newEmail => ({
  type: Constants.CHANGE_EMAIL,
  payload: newEmail,
});

export const changePass = newPass => ({
  type: Constants.CHANGE_PASS,
  payload: newPass,
});

export const changeName = newName => ({
  type: Constants.CHANGE_NAME,
  payload: newName,
});

export const registerUser = user => (
  (dispatch) => {
    dispatch({ type: Constants.IS_LOADING });
    firebase.auth().createUserWithEmailAndPassword(user.email, user.pass)
      .then((sucess) => {
        console.log(sucess);
        firebase.database().ref(`/contatos/users/${sucess.user.uid}`)
          .push({ email: user.email, name: user.name }).then(() => {
            dispatch({ type: 'register_sucess' });
            Navigator.navigate('Home');
          });
      })
      .catch(err => dispatch({
        type: Constants.REGISTER_ERROR,
        payload: err.message,
      }));
  }
);

export const loginAction = user => (
  (dispatch) => {
    dispatch({ type: Constants.IS_LOADING });
    firebase.auth().signInWithEmailAndPassword(user.email, user.pass)
      .then(sucess => dispatch({ type: 'login', payload: sucess }))
      .catch(err => dispatch({
        type: Constants.LOGIN_ERROR,
        payload: err.message,
      }));
  }
);
