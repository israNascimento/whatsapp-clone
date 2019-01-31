import * as Constants from '../Constants/AppConst';

const INITIAL_DATA = {
  isModalVisible: false,
};

export default (state = INITIAL_DATA, action) => {
  console.log(`Chamou ${action.type} - ${action.payload}`);

  switch (action.type) {
    case Constants.MODAL_VISIBILITY:
      return { ...state, isModalVisible: action.payload };
    default:
      return state;
  }
};
