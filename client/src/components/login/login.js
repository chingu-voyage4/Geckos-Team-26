// eslint-disable-next-line
import React, { Component } from 'react';
import './login.css';

class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ui form">
        <div className="field">
          <label>
            Email
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </label>
        </div>
        <br />
        <div className="field">
          <label>
            Password
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </label>
        </div>
        <button className="ui button" type="submit">
          Log In
        </button>
      </form>
    );
  }
}

export default LogIn;
