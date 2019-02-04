import { combineReducers } from 'redux';
import auth from './Auth';
import addContacts from './AddContacts';
import contacts from './Contacts';
import chat from './Chat';
import chatList from './ChatList';

export default combineReducers({
  auth,
  addContacts,
  contacts,
  chat,
  chatList,
});
