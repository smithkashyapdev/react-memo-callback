import React from 'react';
import './style.css';

export default function Child(props) {
  const otherFoo = function () {
    return `bar`;
  };
  console.log('again render');
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.detail}</p>
      <p>{props.memo}</p>
      <button onClick={props.call}>Click me</button>
    </div>
  );
}
