export const userActionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

export const loginUser = (user, remember) => (dispatch) => {
  return dispatch({ type: userActionTypes.LOGIN, user, remember });
};

export const logoutUser = () => (dispatch) => {
  return dispatch({ type: userActionTypes.LOGOUT });
};
