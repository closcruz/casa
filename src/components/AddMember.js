import React, { Component } from "react";
import { Form, Button, Header } from "semantic-ui-react";
import PropTypes from "prop-types";

class AddMember extends Component {
  // TODO Change Refs to event checking to gather data
  nameRef = React.createRef();
  positionRef = React.createRef();
  emailRef = React.createRef();
  majorRef = React.createRef();
  memSinceRef = React.createRef();

  static propTypes = {
    addMember: PropTypes.func
  };

  createMember = e => {
    e.preventDefault();

    const member = {
      name: this.nameRef.current.value,
      position: this.positionRef.current.value,
      email: this.emailRef.current.value,
      major: this.majorRef.current.value,
      memSince: this.memSinceRef.current.value
    };
    this.props.addMember(member);
    // Refresh form
    e.currentTarget.reset();
  };
  render() {
    // TODO Change Refs to event checking to gather data
    return (
      <Form onSubmit={this.createMember}>
        <Header as="h4">Add new board member</Header>
        <Form.Group>
          <Form.Input
            placeholder="Member's Name"
            name="text"
            ref={this.nameRef}
          />
          <Form.Input
            placeholder="Position"
            name="position"
            ref={this.positionRef}
          />
          <Form.Input placeholder="Email" name="email" ref={this.emailRef} />
        </Form.Group>
        <Form.Group>
          <Form.Input placeholder="Major" name="major" ref={this.majorRef} />
          <Form.Input
            placeholder="Member Since"
            name="memSince"
            ref={this.memSinceRef}
          />
          <Button fluid size="small" color="blue" icon="plus" />
        </Form.Group>
      </Form>
    );
  }
}

export default AddMember;
