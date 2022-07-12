import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  Increment,
  Decrement,
} from './actionTypes';

export const increment = () => {
  return {
    type: Increment,
  };
};

export const decrement = () => {
  return {
    type: Decrement,
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
