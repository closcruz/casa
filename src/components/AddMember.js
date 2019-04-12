import React, { Component } from "react";
import PropTypes from "prop-types";

class AddMember extends Component {
  nameRef = React.createRef();
  positionRef = React.createRef();
  emailRef = React.createRef();
  majorRef = React.createRef();
  memSinceRef = React.createRef();

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
      <form className="member-add" onSubmit={this.createMember}>
        <input
          name="name"
          type="text"
          placeholder="Member Name"
          ref={this.nameRef}
        />
        <input
          name="position"
          type="text"
          placeholder="Position"
          ref={this.positionRef}
        />
        <input
          name="email"
          type="text"
          placeholder="Main Email"
          ref={this.emailRef}
        />
        <input
          name="major"
          type="text"
          placeholder="Member's Major"
          ref={this.majorRef}
        />
        <input name="memSince" type="text" ref={this.memSinceRef} />
        <button type="submit">Add Member</button>
      </form>
    );
  }
}

export default AddMember;
