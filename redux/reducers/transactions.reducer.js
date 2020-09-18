import { transactionsActionTypes } from '../actions/transactions.action';

const transactionsInitialState = [];

export default function transactionsReducer(state = transactionsInitialState, action) {
  switch (action.type) {
    case transactionsActionTypes.SET: {
      const { data } = action;
      if (data) return [...data];
      return [...state];
    }
    case transactionsActionTypes.ADD: {
      const { transaction } = action;
      const newState = [...state];
      newState.push(transaction);
      return [...newState];
    }
    default:
      return state;
  }
}
