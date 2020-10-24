import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/root';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production')
    return composeWithDevTools(applyMiddleware(...middleware));
  return applyMiddleware(...middleware);
};

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  }
  return rootReducer(state, action);
};

const initStore = () => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]));
};

export default createWrapper(initStore);
