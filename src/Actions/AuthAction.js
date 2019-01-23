// import firebase from 'firebase';

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

export const registerUser = (user) => {
  console.log(user);
  /* firebase.auth().createUserWithEmailAndPassword(user.email, user.pass)
    .then(suc => console.log(suc))
    .catch(err => console.log(err)); */
  return {
    type: 'Hi',
  };
};
