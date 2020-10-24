export const uiActionTypes = {
  SHOW_LOADING: 'SHOW_LOADING',
  HIDE_LOADING: 'HIDE_LOADING',
};

export const showLoadingUi = () => (dispatch) => {
  return dispatch({ type: uiActionTypes.SHOW_LOADING });
};

export const hideLoadingUi = () => (dispatch) => {
  return dispatch({ type: uiActionTypes.HIDE_LOADING });
};
