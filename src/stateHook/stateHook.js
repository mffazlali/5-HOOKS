import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './stateHook.module.css';

const StateHook=(props)=> {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState({ name: 'ali', age: 28 });
  return (
    <div className={styles.stateHook}>
      <div>
        <p>current count: {count}</p>
        <button onClick={() => setCount(count + 1)}>add count</button>
      </div>
      <div>
        <p>person: {person.name}, {person.age}</p>
        <button onClick={() => setPerson({ name: 'reza', age:person.age })}>change person</button>
      </div>
    </div>
  );
};

StateHook.propTypes = {};

StateHook.defaultProps = {};

export default StateHook;
