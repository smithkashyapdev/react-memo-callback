import React, { useState, useMemo, useEffect, useCallback } from 'react';
import Child from './Child';
import './style.css';

import { useDispatch, useSelector } from 'react-redux';
// import { decrement, increment,selectCount,selectPost,incrementAsync,fetchAsyncPost } from './reducers/index';

import { getPosts, getIncrement, getDecrement } from './saga/post/actions';

export default function App() {
  const {count,posts} = useSelector((state) => {
    console.log(state);
    return state;
  });
  const dispatch = useDispatch();
  const callback = useCallback((a, b) => {
    console.log('called it');
    //setCount(a + b);
  }, []);

  const countIncrement = useCallback(() => {
    try {
      dispatch(getIncrement());
    } catch (e) {
      console.log(e);
    }
  }, []);

  const countDecrement = useCallback(() => {
    try {
      dispatch(getDecrement());
    } catch (e) {
      console.log(e);
    }
  }, []);

  const memo = useMemo(() => {
    console.log('memo call it');
    return 4;
  }, []);

  console.log('App render');
  useEffect(() => {
    console.log('useEffect');
    dispatch(getPosts());
  }, []);

  //<Child name="smith" detail="B.tech" call={callback} memo={memo}></Child>
  return (
    <div>
      <Child name="smith" detail="B.tech" call={callback} memo={memo} count={count}postdata={posts}></Child>
      <button onClick={countIncrement.bind()}>increment</button>
      <button onClick={countDecrement.bind()}>decrement</button>
      <button onClick={() => dispatch(incrementAsync(Number(5) || 0))}>
        Add Async
      </button>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
