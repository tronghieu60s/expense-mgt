import { uiActionTypes } from '../actions/ui.action';

const uiInitialState = {
  loading: false,
};

export default function uiReducer(state = uiInitialState, action) {
  switch (action.type) {
    case uiActionTypes.SHOW_LOADING:
      return { ...state, loading: true };
    case uiActionTypes.HIDE_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
}
