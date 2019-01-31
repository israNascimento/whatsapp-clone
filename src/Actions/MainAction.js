import * as Constants from '../Constants/AppConst';

export const changeModalVisibility = visibility => ({
  type: Constants.MODAL_VISIBILITY,
  payload: visibility,
});

export const toIgnore = 1;
