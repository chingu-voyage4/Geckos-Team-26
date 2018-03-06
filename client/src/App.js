/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './App.css';

import Main from './components/main/main';
import LogIn from './components/login/login';
import SignUp from './components/signup/signup';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Log in</Link></li>
                <li><Link to="/signup">Sign up</Link></li>
              </ul>
            </nav>
          </header>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
