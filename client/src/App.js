/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header";
import Main from "./components/main/main";
import UserForm from "./components/userform/userform";
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
            <Route path="/" component={Main} exact />
            <Route path="/login" component={UserForm} />
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
