import { takeLatest, put, call } from 'redux-saga/effects';

import { GET_POSTS, GET_POST_DETAILS } from './actionTypes';

import {
  getPostsSuccess,
  getPostsFail,
  getPostDetailsSuccess,
  getPostDetailsFail,
} from './actions';

import { URL_GET_ALL_POST } from '../../utils/constants';
import { executeRequest, getApi } from '../../services/data-service';

function* onGetPosts() {
  try {
    console.log('--onGet', 'response');
    const response = yield call(getApi(URL_GET_ALL_POST));
    console.log('--onGet', 'response');
    yield put(getPostsSuccess(response));
  } catch (error) {
    yield put(getPostsFail(error.response));
  }
}

function* CartSaga() {
  yield takeLatest(GET_POSTS, onGetPosts);
}

export default CartSaga;
