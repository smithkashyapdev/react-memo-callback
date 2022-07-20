import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import './style.css';
import { useSelector } from 'react-redux';

export default function Profile(props) {
  // const getPost = useMemo(() => {
  //   return posts
  // }, []);

  //console.log('again render');
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Profile</p>
    </div>
  );
}
