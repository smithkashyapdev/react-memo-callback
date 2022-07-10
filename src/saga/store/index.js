import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../../reducers/index';

import createSagaMiddleware from 'redux-saga';

import PostReducer from '../post/reducer';
import rootSaga from '../post/saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: PostReducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
