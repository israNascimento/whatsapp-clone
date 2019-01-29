const INITIAL_DATA = {
  name: '',
  email: '',
  pass: '',
  errorMessage: '',
};

export default (state = INITIAL_DATA, action) => {
  console.log(action);
  if (action.type === 'change_email') {
    return { ...state, email: action.payload };
  }
  if (action.type === 'change_pass') {
    return { ...state, pass: action.payload };
  }
  if (action.type === 'change_name') {
    return { ...state, name: action.payload };
  }
  if (action.type === 'register_error') {
    return { ...state, errorMessage: action.payload };
  }
  if (action.type === 'register_sucess') {
    return { ...state };
  }
  return state;
};
