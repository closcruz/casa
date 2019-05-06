import React, { Component } from "react";
import { firebaseApp } from "../base";
import PropTypes from "prop-types";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  // firebaseAuth = (email, password) => {
  //   firebaseApp
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then(authData => {})
  //     .catch(err => {
  //       alert(err.code);
  //     });
  // };

  onChange = e => {
    const newCreds = { ...this.state };
    newCreds[e.target.name] = e.target.value;
    this.setState(newCreds);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { email, password } = this.state;
    if (onSubmit) {
      onSubmit(email, password);
    }
  };

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          name="email"
          onChange={this.onChange}
          value={this.state.email}
        />
        <input
          type="password"
          name="password"
          onChange={this.onChange}
          value={this.state.password}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Login;
