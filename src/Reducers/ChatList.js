import * as Constants from '../Constants/ChatList';

const INITIAL_DATA = {
  lista: [],
};

export default (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case Constants.CHAT_LIST:
      return { ...state, lista: action.payload };
    default:
      return { ...state };
  }
};
