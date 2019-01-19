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
