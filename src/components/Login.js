import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

class Login extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

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
      <Grid
        textAlign="center"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
        <Grid.Column width="4">
          <Header as="h2" color="orange" textAlign="center">
            Log In
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                name="email"
                placeholder="Email Address"
                onChange={this.onChange}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                name="password"
                placeholder="Password"
                type="password"
                onChange={this.onChange}
              />
              <Button color="blue" fluid size="large">
                Sign in
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;
