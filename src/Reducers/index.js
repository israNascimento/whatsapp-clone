import { combineReducers } from 'redux';
import auth from './Auth';
import main from './Main';

export default combineReducers({
  auth,
  main,
});
