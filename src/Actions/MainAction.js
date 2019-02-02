import * as Constants from '../Constants/AppConst';

export const changeModalVisibilityAction = visibility => ({
  type: Constants.MODAL_VISIBILITY,
  payload: visibility,
});

export const changeContactTextAction = text => ({
  type: Constants.CHANGE_ADD_CONTACT_TEXT,
  payload: text,
});

export const toIgnore = 1;
