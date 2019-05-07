import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

class Login extends Component {
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
      <div className="login-form">
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxwidth: 450 }}>
            <Header as="h2" color="orange" textAlign="center">
              CASA
            </Header>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Email Address"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />
                <Button color="blue" fluid size="large">
                  Sign in
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Login;
