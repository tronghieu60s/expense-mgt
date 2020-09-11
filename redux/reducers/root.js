import { combineReducers } from 'redux';
import count from './count.reducer';
import ui from './ui.reducer';
import user from './user.reducer';

const rootReducer = combineReducers({
  count,
  ui,
  user,
});

export default rootReducer;
