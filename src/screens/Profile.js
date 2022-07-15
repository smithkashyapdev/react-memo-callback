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
