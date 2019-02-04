import * as Constants from '../Constants/ChatConstants';

const INITIAL_DATA = {
  textInput: '',
  chatList: [],
};

export default (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case Constants.CHANGE_CHAT_CONTACT_TEXT:
      return { ...state, textInput: action.payload };
    case Constants.CHAT_LIST:
      return { ...state, chatList: action.payload };
    case Constants.SUCCESS:
      return { ...state, textInput: '' };
    default:
      return state;
  }
};
