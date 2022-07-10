import React, { useState, useMemo, useEffect, useCallback } from 'react';
import Child from './Child';
import './style.css';

import { useDispatch, useSelector } from 'react-redux';
// import { decrement, increment,selectCount,selectPost,incrementAsync,fetchAsyncPost } from './reducers/index';

import { getPosts } from "./saga/post/actions";

export default function App() {

  
  //const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const callback = useCallback(
    (a, b) => {
      console.log('called it');
      //setCount(a + b);
    },
    []
  );



  const memo = useMemo(() => {
    console.log('memo call it');
    return 4;
  }, []);

  useEffect(() => {
    console.log('useEffect');
    dispatch(getPosts())
  }, []);

  

  return (
    <div>
      <Child
        name="smith"
        detail="B.tech"
        call={callback}
        memo={memo}
      ></Child>
      <button   onClick={() => dispatch(increment())}>increment</button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
      <button
          onClick={() => dispatch(incrementAsync(Number(5) || 0))}
        >
          Add Async
        </button>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
     
    </div>
  );
}
