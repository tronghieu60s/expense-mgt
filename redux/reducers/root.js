import { combineReducers } from 'redux';
import ui from './ui.reducer';
import user from './user.reducer';
import transactions from './transactions.reducer';

const rootReducer = combineReducers({
  ui,
  user,
  transactions,
});

export default rootReducer;
