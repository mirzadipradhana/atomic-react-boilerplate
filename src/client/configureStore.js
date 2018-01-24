import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
  routerMiddleware as createRouterMiddleware,
  routerReducer,
} from 'react-router-redux';

import appReducer from './ui/domain/ViewMain/reducer';
// import rootSaga from './rootSaga';

export default (browserHistory, initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    sagaMiddleware,
    createRouterMiddleware(browserHistory)
  ];
  const reducer = combineReducers(
    {
      app: appReducer,
      router: routerReducer,
    }
  );

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(...middlewares)
  ));

  // sagaMiddleware.run(rootSaga);
  return store;
};
