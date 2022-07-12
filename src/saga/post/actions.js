import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  Increment_Type,
  Decrement_Type,
  GET_POSTS_FAIL,
} from './actionTypes';

export const getPosts = () => {
  return {
    type: GET_POSTS,
  };
};

export const getIncrement = () => {
  return Increment_Type;
};

export const getDecrement = () => {
  return Decrement_Type;
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
