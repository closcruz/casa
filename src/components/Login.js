import React, { Component } from "react";
import { firebaseApp } from "../base";
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

  firebaseAuth = (email, password) => {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.props.authHandler)
      .catch(err => {
        alert(err.code);
      });
  };

  onChange = e => {
    const newCreds = { ...this.state };
    newCreds.credentials[e.target.name] = e.target.value;
    this.setState(newCreds);
  };

  render() {
    return (
      <div className="login-form">
        <p>Current user id: {this.props.user}</p>
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
        <button
          onClick={() =>
            this.firebaseAuth(
              this.state.credentials.email,
              this.state.credentials.password
            )
          }
        >
          Login
        </button>
      </div>
    );
  }
}

export default Login;
