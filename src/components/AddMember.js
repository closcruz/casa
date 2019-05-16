import React, { Component } from "react";
import { Form, Button, Header } from "semantic-ui-react";
import PropTypes from "prop-types";

class AddMember extends Component {
  static propTypes = {
    addMember: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      position: "",
      email: "",
      major: "",
      memSince: ""
    };
  }

  createMember = e => {
    e.preventDefault();

    const { name, position, email, major, memSince } = this.state;
    const member = {
      name: name,
      position: position,
      email: email,
      major: major,
      memSince: memSince
    };
    this.props.addMember(member);
    // Refresh form
    e.currentTarget.reset();
  };

  handleChange = e => {
    const newState = { ...this.state };
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  render() {
    return (
      <Form onSubmit={this.createMember}>
        <Header as="h4">Add new board member</Header>
        <Form.Input
          fluid
          placeholder="Member's Name"
          name="name"
          onChange={this.handleChange}
        />
        <Form.Input
          fluid
          placeholder="Position"
          name="position"
          onChange={this.handleChange}
        />
        <Form.Input
          fluid
          placeholder="Email"
          name="email"
          onChange={this.handleChange}
        />
        <Form.Input
          fluid
          placeholder="Major"
          name="major"
          onChange={this.handleChange}
        />
        <Form.Input
          fluid
          placeholder="Member Since"
          name="memSince"
          onChange={this.handleChange}
        />
        <Button fluid size="small" color="blue" icon="plus" />
      </Form>
    );
  }
}

export default AddMember;
