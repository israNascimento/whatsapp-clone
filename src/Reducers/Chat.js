import * as Constants from '../Constants/ChatConstants';

const INITIAL_DATA = {
  textInput: '',
};

export default (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case Constants.CHANGE_CHAT_CONTACT_TEXT:
      return { ...state, textInput: action.payload };
    default:
      return state;
  }
};
