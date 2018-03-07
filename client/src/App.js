/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header";
import Main from "./components/main/main";
import LogIn from "./components/login/login";
import SignUp from "./components/signup/signup";
import Profile from "./components/profile/profile";
import Footer from "./components/footer/footer";
import NotFound from "./components/notfound/notfound";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/profile" component={Profile} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
