import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';
import client from './apollo-client';

export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(client.middleware()),
);