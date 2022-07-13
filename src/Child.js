import React, { useState, useMemo, useEffect, useCallback } from 'react';
import './style.css';
import { useSelector } from 'react-redux';

export default function Child(props) {
  // const { posts, loadingPosts } = useSelector((state) =>

  // {
  //   console.log('child->',state)
  // return state
  // }
  // );

  const [first, setFirstInput] = useState(0);
  const [second, setSecondInput] = useState(0);
  const [users, setUsers] = useState([]);

  const count = 2;
  const otherFoo = function () {
    return `bar`;
  };

  // function getData(array) {
  //   return new Promise(function (myResolve, myReject) {
  //     // "Producing Code" (May take some time)
  //     const extracted = array.map((object) => {
  //       return { name: object.title };
  //     });
  //     myResolve(extracted); // when successful
  //     myReject('Not extracted'); // when error
  //   });
  // }

  // getData(posts).then(
  //   function (value) {
  //     setUsers(value.toString());
  //     //console.log('pro', value);
  //   },
  //   function (error) {
  //     /* code if some error */
  //   }
  // );

  //console.log('again render');
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{count}</p>
      <p>{props.memo}</p>
      <p>{users}</p>
      <input
        type="number"
        onChange={(e) => {
          setFirstInput(parseInt(e.target.value));
        }}
      ></input>
      <input
        type="number"
        onChange={(e) => {
          setSecondInput(parseInt(e.target.value));
        }}
      ></input>
      <button onClick={props.call.bind(this, first, second)}>Click me</button>
    </div>
  );
}
