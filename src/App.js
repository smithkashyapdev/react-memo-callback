import React, { useState, useMemo, useEffect, useCallback } from 'react';
import Child from './Child';
import './style.css';
import { URL_GET_ALL_POST } from './utils/constants';
import { executeRequest } from './services/data-service';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment,selectCount } from './reducers/index';

export default function App() {
  const [data, setData] = useState([]);
  
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const callback = useCallback(
    (a, b) => {
      console.log('called it');
      //setCount(a + b);
    },
    [count]
  );



  const memo = useMemo(() => {
    console.log('memo call it');
    return 4;
  }, []);

  useEffect(() => {
    console.log('useEffect');
    executeRequest(URL_GET_ALL_POST).then((data) => {
      setData(data);
      //console.log(JSON.stringify(data))
    });
  }, []);

  return (
    <div>
      <Child
        name="smith"
        detail="B.tech"
        call={callback}
        memo={memo}
        list={data}
      ></Child>
      <button   onClick={() => dispatch(increment())}>increment</button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <a>{count}</a>
    </div>
  );
}
