import React, { Component } from 'react';

import { createStore } from 'redux';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;


const defaultState = {
  welcome: 'Hi!',
  otherState: 'Some stuff',
  what: 'NMore sdtuff'
}

// Reducer
const greeting = (state = defaultState, action) => {
  switch (action.type) {
    case 'GREET_NAME':
      return { ...state, welcome: `hello ${action.name}` };
    case 'GREET_WORLD':
      return { ...state, welcome: 'Hello World!' };
    default:
      return state;
  }
};

// Create the store
const store = createStore(greeting);

console.log(store.getState());

const name = 'David';

// Action
store.dispatch({
  type: 'GREET_NAME',
  name
})

console.log(store.getState());