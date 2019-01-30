import firebase from 'firebase';
import Navigator from '../NavigationService';

export const changeEmail = newEmail => ({
  type: 'change_email',
  payload: newEmail,
});

export const changePass = newPass => ({
  type: 'change_pass',
  payload: newPass,
});

export const changeName = newName => ({
  type: 'change_name',
  payload: newName,
});

export const registerUser = user => (
  (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.pass)
      .then((sucess) => {
        console.log(sucess);
        firebase.database().ref(`/contatos/users/${sucess.user.uid}`)
          .push({ email: user.email, name: user.name }).then(() => {
            dispatch({ type: 'register_sucess' });
            Navigator.navigate('Home');
          });
      })
      .catch(err => dispatch({ type: 'register_error', payload: err.message }));
  }
);

export const loginAction = user => (
  (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(user.email, user.pass)
      .then(sucess => dispatch({ type: 'login', payload: sucess }))
      .catch(err => dispatch({ type: 'login_error', payload: err.message }));
  }
);
