import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  Increment_Type,
  Decrement_Type,
  GET_POSTS_FAIL,
} from './actionTypes';

export const getPosts = (a, b) => {
  return {
    type: GET_POSTS,
    payload: { x: a, y: b },
  };
};

export const getIncrement = () => {
  return {
    type: Increment_Type,
  };
};

export const getDecrement = () => {
  return {
    type: Decrement_Type,
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
