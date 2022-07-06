import React, { useState, useMemo, useEffect, useCallback } from 'react';
import Child from './Child';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const callback = useCallback(() => {
    console.log('called it');
    setCount(count + 1);
  }, [count]);

  const memo = useMemo(() => {
    console.log('memo call it')
    return 4;
  }, []);

  useEffect(() => {
    console.log('useEffect');
  }, [count]);

  return (
    <div>
      <Child name="smith" detail="B.tech" call={callback} memo={memo}></Child>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <a>{count}</a>
    </div>
  );
}
