import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';

import eventReducer from './reducers/eventReducer.js';
import purchaseReducer from './reducers/purchaseReducer.js';

export default createStore(
  combineReducers({
    eventReducer,
    purchaseReducer,
  }),
  {},
  applyMiddleware(createLogger(), promise()),
);
