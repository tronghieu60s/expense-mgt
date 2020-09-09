import { countActionTypes } from '../actions/count.action';

const countInitialState = {
  count: 0,
};

export default function reducerReducer(state = countInitialState, action) {
  switch (action.type) {
    case countActionTypes.ADD:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}
