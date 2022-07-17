import { takeLatest, put, takeEvery, delay, call } from 'redux-saga/effects';

import {
  GET_POSTS,
  Increment_Type,
  Decrement_Type,
  Increment_SUCCESS_Type,
  Decrement_SUCCESS_Type,
} from './actionTypes';

import { getPostsSuccess, getPostsFail } from './actions';

import { URL_GET_ALL_POST } from '../../utils/constants';
import { executeRequest } from '../../services/data-service';

function* onGetPosts() {
  try {
    console.log('--onGet', 'response');
    yield delay(5000);
    const response = yield call(executeRequest, URL_GET_ALL_POST);
    console.log('--onGet', response);
    yield put(getPostsSuccess(response));
  } catch (error) {
    yield put(getPostsFail(error.response));
  }
}

function* increment() {
  try {
    yield delay(2000);
    console.log('delay');
    yield put({ type: Increment_SUCCESS_Type });
  } catch (e) {
    console.log(e);
  }
}

function* decrement() {
  yield delay(1000);
  yield put({ type: Decrement_SUCCESS_Type });
}

function* CartSaga() {
  console.log('saga', 'watcher');
  yield takeLatest(GET_POSTS, onGetPosts);
  yield takeEvery(Increment_Type, increment);
  yield takeEvery(Decrement_Type, decrement);
}

export default CartSaga;
