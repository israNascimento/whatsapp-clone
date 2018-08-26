const INITIAL_DATA = {
  nome: '',
  email: '',
  pass: '',
};

export default (state = INITIAL_DATA, action) => {
  if (action.type === 'change_email') {
    return { ...state, email: action.payload };
  }
  if (action.type === 'change_pass') {
    return { ...state, pass: action.payload };
  }
  return state;
};
