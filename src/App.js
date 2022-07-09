import React, { useState, useMemo, useEffect, useCallback } from 'react';
import Child from './Child';
import './style.css';
import { URL_GET_ALL_POST } from './utils/constants';
import { executeRequest } from './services/data-service';

export default function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const callback = useCallback(
    (a, b) => {
      console.log('called it');
      setCount(a + b);
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
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <a>{count}</a>
    </div>
  );
}
