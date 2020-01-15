import React, { useReducer, useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './reducerHook.module.css';
import CounterReducer from '../Store/Counter/Counter.reducer';
import { counterState } from '../Store/Counter/Counter.state';
import * as counterActionType from '../Store/Counter/Counter.action';
import { ThemeContext } from '../Contexts';

const ReducerHook = () => {
  const [state, dispatch] = useReducer(CounterReducer, counterState)
  const theme = useContext(ThemeContext);
  return (
    <div className={styles.reducerHook} style={{ background: theme.background, color: theme.color }} >
      <h3>{state.counter.toString()}</h3>
      <button onClick={() => dispatch(counterActionType.increment())} >inc</button>
      <button onClick={() => dispatch(counterActionType.decrement())} >dec</button>
      <button onClick={() => dispatch(counterActionType.add(5))} >add</button>
      <button onClick={() => dispatch(counterActionType.subtract(4))} >sub</button>
    </div>
  );
};

ReducerHook.propTypes = {};

ReducerHook.defaultProps = {};

export default ReducerHook;
