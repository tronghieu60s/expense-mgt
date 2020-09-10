import { combineReducers } from 'redux';
import count from './count.reducer';
import ui from './ui.reducer';

const rootReducer = combineReducers({
  count,
  ui,
});

export default rootReducer;
