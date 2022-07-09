import { useDispatch } from 'react-redux';
const dispatch = useDispatch();
const setData = (content) => {
  return {
    type: 'SET_DATA',
    payload: content,
  };
};

export const incrementCounter = () => {
  return {
    type: 'INCREMENT',
  };
};

export const decrementCounter = () => {
  return {
    type: 'DECREMENT',
  };
};

const appendData = (obj) => {
  return (dispatch) => {
    dispatch(setData(obj));
  };
};

export { appendData };
