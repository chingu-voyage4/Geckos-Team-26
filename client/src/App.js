/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header";
import Main from "./components/main/main";
import LogIn from "./components/login/login";
import SignUp from "./components/signup/signup";
import Profile from "./components/profile/profile";
import Footer from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/profile" component={Profile} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
