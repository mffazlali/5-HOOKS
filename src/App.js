import React from 'react';
import './App.css';
import StateHook from './stateHook/stateHook';
import EffectHook from './effectHook/effectHook';
import YourOwnHooks from './CustomHooks/YourOwnHooks/YourOwnHooks';
import ReducerHook from './reducerHook/reducerHook';
import { ThemeContext, themes } from './Contexts';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
        <StateHook />
        <hr />
        <EffectHook />
        <hr />
        <YourOwnHooks />
        <ThemeContext.Provider value={themes.light}>
          <ReducerHook />
        </ThemeContext.Provider>
      </header>
    </div>
  );
}

export default App;

