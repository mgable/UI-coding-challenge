import React, { Component } from 'react';
import './App.css';
import Fruit from './containers/Fruit.js'

// if this app had routing, this is where it would go
class App extends Component {
  render() {
    return (
      <Fruit></Fruit>
    );
  }
}

export default App;