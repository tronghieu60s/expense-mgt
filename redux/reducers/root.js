import { combineReducers } from 'redux';
import count from './count.reducer';
import ui from './ui.reducer';
import user from './user.reducer';
import transactions from './transactions.reducer';

const rootReducer = combineReducers({
  count,
  ui,
  user,
  transactions,
});

export default rootReducer;
