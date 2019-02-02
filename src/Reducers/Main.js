import * as Constants from '../Constants/AppConst';

const INITIAL_DATA = {
  isModalVisible: false,
  addContactText: '',
  addContactErrorText: '',
};

export default (state = INITIAL_DATA, action) => {
  console.log(`Chamou ${action.type} - ${action.payload}`);

  switch (action.type) {
    case Constants.MODAL_VISIBILITY:
      return { ...state, isModalVisible: action.payload };
    case Constants.CHANGE_ADD_CONTACT_TEXT:
      return { ...state, addContactText: action.payload };
    case Constants.ADD_CONTACT_ERROR:
      return { ...state, addContactErrorText: action.payload };
    case Constants.ADD_CONTACT_SUCESS:
      return {
        ...state,
        addContactErrorText: '',
        addContactText: '',
        isModalVisible: false,
      };
    default:
      return state;
  }
};
