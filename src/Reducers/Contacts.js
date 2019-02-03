import * as Constants from '../Constants/ContactsConst';

const INITIAL_DATA = {

};

export default (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case Constants.CONTACT_LIST:
      return { ...state, list: action.payload };
    default:
      return { ...state };
  }
};
