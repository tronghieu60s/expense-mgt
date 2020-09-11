export const userActionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  SET: 'SET',
};

export const setUser = (user) => (dispatch) => {
  return dispatch({ type: userActionTypes.SET, user });
};

export const loginUser = (user, remember) => (dispatch) => {
  return dispatch({ type: userActionTypes.LOGIN, user, remember });
};

export const logoutUser = () => (dispatch) => {
  return dispatch({ type: userActionTypes.LOGOUT });
};