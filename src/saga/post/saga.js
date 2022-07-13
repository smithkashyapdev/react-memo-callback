import { takeLatest, put, call } from 'redux-saga/effects';

import { GET_POSTS, Increment_Type, Decrement_Type } from './actionTypes';

import { getPostsSuccess, getPostsFail } from './actions';

import { URL_GET_ALL_POST } from '../../utils/constants';
import { executeRequest } from '../../services/data-service';

function* onGetPosts() {
  try {
    console.log('--onGet', 'response');
    const response = yield executeRequest(URL_GET_ALL_POST);
    console.log('--onGet', response);
    yield put(getPostsSuccess(response));
  } catch (error) {
    yield put(getPostsFail(error.response));
  }
}

export function* incrementAsync() {
  console.log('saga', 'incrementAsync');
  yield put({ type: Increment_Type });
  yield put({ type: Decrement_Type });
}

function* CartSaga() {
  console.log('saga', 'watcher');
  yield takeLatest(GET_POSTS, onGetPosts);
  yield put({ type: Increment_Type });
  yield put({ type: Decrement_Type });
}

export default CartSaga;
