import { combineReducers } from 'redux';

import data from './components/reducer';
import chatsList from './components/Chats/reducer';

export default combineReducers({
  data,
  chatsList
});