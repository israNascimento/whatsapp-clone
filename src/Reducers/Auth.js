import * as Constants from '../Constants/AuthConst';

const INITIAL_DATA = {
  name: '',
  email: '',
  pass: '',
  errorMessageSignup: '',
  errorMessageSignin: '',
  isLoading: false,
};

export default (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case Constants.CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case Constants.CHANGE_PASS:
      return { ...state, pass: action.payload };
    case Constants.CHANGE_NAME:
      return { ...state, name: action.payload };
    case Constants.REGISTER_ERROR:
      return { ...state, errorMessageSignup: action.payload, isLoading: false };
    case Constants.LOGIN_ERROR:
      return { ...state, errorMessageSignin: action.payload, isLoading: false };
    case Constants.IS_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
