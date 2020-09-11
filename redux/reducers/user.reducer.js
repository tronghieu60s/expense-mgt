import jwt from 'jsonwebtoken';
import { userActionTypes } from '../actions/user.action';

const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY;

const userInitialState = {};
export default function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case userActionTypes.LOGIN: {
      const { user, remember } = action;
      const userStorage = jwt.sign(user._id, PRIVATE_KEY);
      localStorage.removeItem('.config_user');
      sessionStorage.removeItem('.config_user');
      if (remember) localStorage.setItem('.config_user', JSON.stringify(userStorage));
      else sessionStorage.setItem('.config_user', JSON.stringify(userStorage));
      return { ...user };
    }
    case userActionTypes.LOGOUT: {
      localStorage.removeItem('.config_user');
      sessionStorage.removeItem('.config_user');
      return { ...userInitialState };
    }
    default:
      return state;
  }
}
