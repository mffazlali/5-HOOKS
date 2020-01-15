import React from 'react';
import './App.css';
import StateHook from './stateHook/stateHook';
import EffectHook from './effectHook/effectHook';
import YourOwnHooks from './CustomHooks/YourOwnHooks/YourOwnHooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
        {/* <StateHook /> */}
        <hr />
        {/* <EffectHook /> */}
        <hr />
        <YourOwnHooks />
      </header>
    </div>
  );
}

export default App;

