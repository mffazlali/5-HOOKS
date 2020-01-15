import React, { useState, useEffect } from 'react';

const useYourOwnHooks = (friendId) => {
  const [isOnline, setIsOnline] = useState(false);
  useEffect(() => {
    if (isOnline) {
      console.log(`friendId ${friendId} is online`);
    } else {
      console.log(`friendId ${friendId} is offline`);
    }
  });

  return isOnline;
};

export default useYourOwnHooks;
