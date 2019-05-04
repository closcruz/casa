import React, { Component } from "react";
import PropTypes from "prop-types";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      redirectToReferrer: false,
      credentials: {
        email: "",
        password: ""
      }
    };
  }

  onChange = e => {
    const newCreds = { ...this.state };
    newCreds.credentials[e.target.name] = e.target.value;
    this.setState(newCreds);
  };

  render() {
    return (
      <div className="login-form">
        <input
          name="email"
          type="text"
          onChange={this.onChange}
          value={this.state.credentials.email}
        />
        <input
          name="password"
          type="password"
          onChange={this.onChange}
          value={this.state.credentials.password}
        />
        <button onClick={() => console.log(this.state.credentials)}>
          Print Creds
        </button>
      </div>
    );
  }
}

export default Login;
