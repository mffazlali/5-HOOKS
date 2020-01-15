import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './YourOwnHooks.module.css';
import useYourOwnHooks from '../useYourOwnHooks/useYourOwnHooks';

const friendList = [
  { id: 1, name: 'ali' },
  { id: 2, name: 'reza' },
  { id: 3, name: 'ehsan' }
];

const YourOwnHooks = (props) => {

  const isOnline1 = useYourOwnHooks(2);

  const [chosenFriend, setChosenFriend] = useState(1);

  const isOnline2 = useYourOwnHooks(chosenFriend);

  const checkOnline = (isOnline) => {
    if (isOnline === null) {
      return (<div>Loading...</div>)
    } else {
      return (<div>value is Online is {isOnline.toString()}</div>)
    }
  }

  return (
    <div>
      <div>
        <div>{checkOnline(isOnline1)}</div>
      </div>
      <div>
        <select value={chosenFriend} onChange={(event) => setChosenFriend(event.target.value)}>
          {
            friendList.map((friend) => (
              <option key={friend.id} value={friend.id}>{friend.name}</option>
            ))
          }
        </select>
        <br />
        <div>{checkOnline(isOnline2)}</div>
      </div>
    </div>
  );
};

YourOwnHooks.propTypes = {};

YourOwnHooks.defaultProps = {};

export default YourOwnHooks;
