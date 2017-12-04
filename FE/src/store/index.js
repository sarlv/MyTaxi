import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers';
import eventsMiddleware from '../middleware';

export default function configureStore(data) {
  const middleware = [
    eventsMiddleware
  ];

  const store = createStore(
    reducer,
    data,
    applyMiddleware(...middleware)
  );

  return store;
}
