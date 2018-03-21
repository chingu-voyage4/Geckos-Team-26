/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header";
import Main from "./components/main/main";
import Dashboard from "./components/dashboard/dashboard";
import PetForm from "./components/petform/petform";
import PetDetails from "./components/petdetails/petdetails";
import UserForm from "./components/userform/userform";
import Profile from "./components/profile/profile";
import Footer from "./components/footer/footer";
import NotFound from "./components/notfound/notfound";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        id: "",
        username: "",
        email: "",
        imgUrl: ""
      }
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header username={this.state.user.username} />
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/petform" component={PetForm} />
            <Route path="/petdetails" component={PetDetails} />
            <Route
              path="/login"
              render={props => <UserForm activeItem="login" {...props} />}
            />
            <Route
              path="/signup"
              render={props => <UserForm activeItem="signup" {...props} />}
            />
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
