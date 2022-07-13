import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  Increment_Type,
  Decrement_Type,
} from './actionTypes';

const initialState = {
  posts: [],
  post: {},
  loadingPosts: false,
  loadingPostDetails: false,
  error: {
    message: '',
  },
  count: 0,
};

const PostReducer = (state = initialState, action) => {
  console.log('action', state);
  switch (action.type) {
    case GET_POSTS:
      state = { ...state, loadingPosts: true };
      break;
    case GET_POSTS_SUCCESS:
      state = { ...state, posts: action.payload, loadingPosts: false };
      break;
    case GET_POSTS_FAIL:
      state = {
        ...state,
        error: {
          message: 'Error',
        },
        loadingPosts: false,
      };
      break;

    case Increment_Type:
      state = { ...state };
      break;

    case Decrement_Type:
      state = { ...state };
      break;

    default:
      state = { ...state };
      break;
  }
  console.log('reducer->', state);
  return state;
};

export default PostReducer;
