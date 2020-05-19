import React from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import {
  all, fork,
} from 'redux-saga/effects';

import videosReducer from './screens/Home/reducer';
import homeSaga from './screens/Home/saga'

import Navigation from './navigation'


const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

const rootReducer = combineReducers({ videosReducer });

const store = createStore(rootReducer, middleware);

const rootSagas = function* root() {
  yield all([
    fork(homeSaga)
  ]);
}
sagaMiddleware.run(rootSagas);

function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}

export default App;