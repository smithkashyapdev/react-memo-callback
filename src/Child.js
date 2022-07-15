import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import './style.css';
import { useSelector } from 'react-redux';

export default function Child(props) {
  const { posts, count } = useSelector((state) => {
    console.log('child--', state);
    return state;
  });

  const [first, setFirstInput] = useState(0);
  const [second, setSecondInput] = useState(0);

  //const count = 2;
  const otherFoo = function () {
    return `bar`;
  };

  // const getPost = useMemo(() => {
  //   return posts
  // }, []);

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

  // getData(getPost).then(
  //   function (value) {
  //     console.log('pro', value);
  //     setUsers(value.toString());
  //   },
  //   function (error) {
  //     console.log(error)
  //     /* code if some error */
  //   }
  // );

  //console.log('again render');
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{count}</p>
      <p>{props.memo}</p>

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
