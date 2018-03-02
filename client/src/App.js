import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      apiData: ''
    }
    
    this.dataHandler = this.dataHandler.bind(this);
  }

  dataHandler() {
    fetch('/test')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ apiData: data.testdata });
      })
  }

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
        <button onClick={this.dataHandler}>Click me to get data from the backend</button>
        <p>{ this.state.apiData }</p>
      </div>
    );
  }
}

export default App;
