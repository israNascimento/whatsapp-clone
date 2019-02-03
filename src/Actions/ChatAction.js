import * as Constants from '../Constants/ChatConstants';

export const changeMessageTextAction = text => ({
  type: Constants.CHANGE_CHAT_CONTACT_TEXT,
  payload: text,
});

export const sendMessageAction = (message) => {
  console.log(message);
  return { type: 'mensagem' };
};
