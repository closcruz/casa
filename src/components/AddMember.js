import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import PropTypes from "prop-types";

class AddMember extends Component {
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
    return (
      <Form onSubmit={this.createMember}>
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
      </Form>
      // <form className="member-add" onSubmit={this.createMember}>
      //   <input
      //     name="name"
      //     type="text"
      //     placeholder="Member Name"
      //     ref={this.nameRef}
      //   />
      //   <input
      //     name="position"
      //     type="text"
      //     placeholder="Position"
      //     ref={this.positionRef}
      //   />
      //   <input
      //     name="email"
      //     type="text"
      //     placeholder="Main Email"
      //     ref={this.emailRef}
      //   />
      //   <input
      //     name="major"
      //     type="text"
      //     placeholder="Member's Major"
      //     ref={this.majorRef}
      //   />
      //   <input name="memSince" type="text" ref={this.memSinceRef} />
      //   <button type="submit">Add Member</button>
      // </form>
    );
  }
}

export default AddMember;
