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
  const [first, setFirstInput] = useState(0);
  const [second, setSecondInput] = useState(0);
  const [nameData, setNameData] = useState([]);
  console.log('child props', props.postdata);
  //const count = 2;
  const otherFoo = function () {
    return `bar`;
  };

  useEffect(() => {
    console.log('--child', 'useEffect');
    function getData(array) {
      return new Promise(function (myResolve, myReject) {
        // "Producing Code" (May take some time)
        const extracted = array.map((object) => {
          return { name: object.title };
        });
        myResolve(extracted); // when successful
        myReject('Not extracted'); // when error
      });
    }

    getData(props.postdata).then(
      function (value) {
        console.log('pro', value);
        setNameData(value);
      },
      function (error) {
        console.log(error);
        /* code if some error */
      }
    );
  }, [props.postdata]);

  // const getPost = useMemo(() => {
  //   return posts
  // }, []);

  //console.log('again render');
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.count}</p>
      <p>{props.memo}</p>
      {nameData.map((home) => (
        <div>{home.name}</div>
      ))}
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
