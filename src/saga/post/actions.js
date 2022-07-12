import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  Increment_Type,
  Decrement_Type,
} from './actionTypes';

export const getincrement = () => {
  return {
    type: Increment_Type,
  };
};

export const getdecrement = () => {
  return {
    type: Decrement_Type,
  };
};

export const getPosts = () => {
  return {
    type: GET_POSTS,
  };
};

export const getPostsSuccess = (posts) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts,
  };
};

export const getPostsFail = (error) => {
  return {
    type: GET_POSTS_FAIL,
    payload: error,
  };
};
