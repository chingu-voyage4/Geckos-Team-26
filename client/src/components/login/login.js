import React from "react";
import "./login.css";

class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
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
      <div className="ui middle aligned center aligned grid custom-display-form">
        <div className="column">
          <h2 className="ui black header">Log In</h2>
          <form onSubmit={this.handleSubmit} className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon" />
                  <input
                    name="email"
                    type="text"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                    placeholder="E-mail address"
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon" />
                  <input
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                    placeholder="Password"
                  />
                </div>
              </div>
              <button
                className="ui fluid large yellow submit button"
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LogIn;
