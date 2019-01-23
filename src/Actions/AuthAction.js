import firebase from 'firebase';

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
      .then(suc => dispatch({ type: 'sucess', payload: suc }))
      .catch(err => dispatch({ type: 'register_error', payload: err.message }));
  }
);
