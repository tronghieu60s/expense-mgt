import * as STORAGE from 'constant/storage';
import jwt from 'jsonwebtoken';
import { userActionTypes } from '../actions/user.action';

const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY;

const userInitialState = {};
export default function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case userActionTypes.SET: {
      const { user } = action;
      if (user) return { ...user };
      return { ...state };
    }
    case userActionTypes.LOGIN: {
      const { user, remember } = action;
      const userStorage = jwt.sign(user._id, PRIVATE_KEY);
      localStorage.removeItem(STORAGE.STORAGE_USER);
      sessionStorage.removeItem(STORAGE.STORAGE_USER);
      if (remember) localStorage.setItem(STORAGE.STORAGE_USER, JSON.stringify(userStorage));
      else sessionStorage.setItem(STORAGE.STORAGE_USER, JSON.stringify(userStorage));
      return { ...user };
    }
    case userActionTypes.LOGOUT: {
      localStorage.removeItem(STORAGE.STORAGE_USER);
      sessionStorage.removeItem(STORAGE.STORAGE_USER);
      return { ...userInitialState };
    }
    default:
      return state;
  }
}
