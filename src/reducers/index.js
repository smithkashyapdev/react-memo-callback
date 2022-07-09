import { createSlice } from '@reduxjs/toolkit';
import { URL_GET_ALL_POST } from '../utils/constants';
import { executeRequest } from '../services/data-service';
export const counterSlice = createSlice({
  name: 'calculator',
  initialState: {
    value: 0,
    post: [],
  },
  reducers: {
    increment: (state) => {
      console.log('increment', state);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    fetch_post: (state, action) => {
      //console.log('sssssssssss',JSON.stringify(action.payload))
      state.post = action.payload;
    },
  },
});

export const incrementAsync = (amount) => (dispatch) => {
  console.log('oncrement', dispatch);
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 5000);
};

export const fetchAsyncPost = () => (dispatch) => {
  console.log('oncrement', dispatch);
  executeRequest(URL_GET_ALL_POST).then((data) => {
    dispatch(fetch_post(data));
    //console.log(JSON.stringify(data))
  });
};

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, fetch_post } =
  counterSlice.actions;
export const selectCount = (state) => state.calculator.value;
export const selectPost = (state) => state.calculator.post;
export default counterSlice.reducer;
