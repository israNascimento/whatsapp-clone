const INITIAL_DATA = {
  name: '',
  email: '',
  pass: '',
  errorMessageSignup: '',
  errorMessageSignin: '',
};

export default (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case 'change_email':
      return { ...state, email: action.payload };
    case 'change_pass':
      return { ...state, pass: action.payload };
    case 'change_name':
      return { ...state, name: action.payload };
    case 'register_error':
      return { ...state, errorMessageSignup: action.payload };
    case 'login_error':
      return { ...state, errorMessageSignin: action.payload };
    default:
      return state;
  }
};
