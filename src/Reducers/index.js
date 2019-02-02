import { combineReducers } from 'redux';
import auth from './Auth';
import addContacts from './AddContacts';

export default combineReducers({
  auth,
  addContacts,
});
