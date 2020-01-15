import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './effectHook.module.css';

const EffectHook = (props) => {
  const [count, setCount] = useState(1);

  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    console.log('useEffect title');
    document.title = `current count is ${count}`;
    return function cleanup() {
      console.log('cleanup title');
    }
  }, [count]);

  useEffect(() => {
    console.log('useEffect handleStatusChange');
    return function cleanup() {
      console.log('cleanup handleStatusChange');
      setTimeout(() => {
        setIsOnline(null);
      }, 2000);
    }
  }, [isOnline]);

  const handleStatusChange = (status) => {
    if (status === null) {
      setIsOnline(true);
    } else {
      setIsOnline(!status);
    }
  }

  let result = null;
  if (isOnline === null) {
    result = (<div>Loading...</div>)
  } else {
    result = (<div>value is Online is {isOnline.toString()}</div>)
  }

  return (
    <div>
      <div>
        <div>count value is {count}</div>
        <button onClick={() => setCount(count + 1)}>inc count</button>
      </div>
      <div>
        <div>{result}</div>
        <button onClick={() => handleStatusChange(isOnline)}>toggle state</button>
      </div>
    </div>
  );
};

EffectHook.propTypes = {};

EffectHook.defaultProps = {};

export default EffectHook;
