/* eslint react/no-unused-state: 0 */
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header";
import PrivateRoute from "./components/PrivateRoute";
import Main from "./components/main/main";
import Dashboard from "./components/dashboard/dashboard";
import PetForm from "./components/petform/petform";
import PetDetails from "./components/petdetails/petdetails";
import UserForm from "./components/userform/userform";
import Profile from "./components/profile/profile";
import Footer from "./components/footer/footer";
import Logout from "./components/logout/logout";
import NotFound from "./components/notfound/notfound";

import AuthService from "./utils/AuthService";
import login from "./utils/login";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      isLoggedIn: false
    };
    this.updateUserInState = this.updateUserInState.bind(this);
    this.updateIsLoggedIn = this.updateIsLoggedIn.bind(this);
    this.getUserData = this.getUserData.bind(this);
    this.Auth = new AuthService();
  }

  componentDidMount() {
    // Check if token exists in storage, and is valid
    const token = this.Auth.getToken();
    const userLoggedIn = this.Auth.isTokenValid(token);
    // If it is, then user is still logged in, get their data
    if (userLoggedIn) {
      this.updateIsLoggedIn(userLoggedIn);
      this.getUserData(token);
    }
  }

  getUserData(token) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const payload = {
      token
    };

    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(payload)
    };
    const postRoute = "/auth/auth";

    const handleResponse = response =>
      response.json().then(json => {
        if (response.ok) {
          return Promise.resolve(json);
        }
        return Promise.reject(json);
      });

    fetch(postRoute, options)
      .then(handleResponse)
      .then(res => {
        const methods = {
          updateUser: this.updateUserInState,
          updateIsLoggedIn: this.updateIsLoggedIn
        };
        if (res.token) {
          login(res, methods);
        }
      })
      .catch(error => console.log(error));
  }

  updateIsLoggedIn(bool) {
    this.setState({
      isLoggedIn: bool
    });
  }

  updateUserInState(user) {
    this.setState({
      user
    });
  }

  render() {
    let user;
    this.state.user ? ({ user } = this.state) : (user = {});
    return (
      <BrowserRouter>
        <div className="app">
          <Header username={user.username} isLoggedIn={this.state.isLoggedIn} />
          <Switch>
            <Route path="/" component={Main} exact />
            <Route
              path="/login"
              render={props => (
                <UserForm
                  username={user.username}
                  activeItem="login"
                  updateUser={this.updateUserInState}
                  updateIsLoggedIn={this.updateIsLoggedIn}
                  isLoggedIn={this.state.isLoggedIn}
                  {...props}
                />
              )}
            />
            <Route
              path="/signup"
              render={props => (
                <UserForm
                  username={user.username}
                  activeItem="signup"
                  updateUser={this.updateUserInState}
                  updateIsLoggedIn={this.updateIsLoggedIn}
                  isLoggedIn={this.state.isLoggedIn}
                  {...props}
                />
              )}
            />
            <Route
              path="/logout"
              render={props => (
                <Logout
                  username={user.username}
                  updateUser={this.updateUserInState}
                  updateIsLoggedIn={this.updateIsLoggedIn}
                  {...props}
                />
              )}
            />
            <PrivateRoute
              path="/dashboard"
              component={Dashboard}
              isLoggedIn={this.state.isLoggedIn}
              user={user}
            />
            <PrivateRoute
              path="/profile"
              component={Profile}
              isLoggedIn={this.state.isLoggedIn}
            />
            <PrivateRoute
              path="/petform"
              component={PetForm}
              isLoggedIn={this.state.isLoggedIn}
              user={user}
            />
            <PrivateRoute
              path="/petdetails"
              component={PetDetails}
              isLoggedIn={this.state.isLoggedIn}
            />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
