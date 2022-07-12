import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAIL } from './actionTypes';

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
