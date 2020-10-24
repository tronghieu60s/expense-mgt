export const transactionsActionTypes = {
  SET: 'SET',
  ADD: 'ADD',
};

export const setTransactions = (data) => {
  return { type: transactionsActionTypes.SET, data };
};

export const addTransactions = (transaction) => (dispatch) => {
  return dispatch({ type: transactionsActionTypes.ADD, transaction });
};
