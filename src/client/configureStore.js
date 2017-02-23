import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware, routerReducer } from 'react-router-redux';

import reduxReducer from './ui/views/PageRedux/reducer';
import rootSaga from './rootSaga';

const reducer = combineReducers(
  {
    redux: reduxReducer,
    routing: routerReducer,
  }
);

export default function configureStore(browserHistory, initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, routerMiddleware(browserHistory)];

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(...middlewares)
  ));

  sagaMiddleware.run(rootSaga);
  return store;
}

