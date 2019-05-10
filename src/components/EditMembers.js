import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import PropTypes from "prop-types";

class EditMember extends Component {
  static propTypes = {
    member: PropTypes.shape({
      name: PropTypes.string,
      postion: PropTypes.string,
      email: PropTypes.string,
      major: PropTypes.string,
      memSince: PropTypes.string
    }),
    index: PropTypes.string,
    updateMember: PropTypes.func,
    deleteMember: PropTypes.func
  };

  handleChange = e => {
    const updateMember = {
      ...this.props.member,
      [e.currentTarget.name]: e.currentTarget.value
    };
    this.props.updateMember(this.props.index, updateMember);
  };

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Input
            name="name"
            onChange={this.handleChange}
            value={this.props.member.name}
          />
          <Form.Input
            name="position"
            onChange={this.handleChange}
            value={this.props.member.postion}
          />
          <Form.Input
            name="email"
            onChange={this.handleChange}
            value={this.props.member.email}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            name="major"
            onChange={this.handleChange}
            value={this.props.member.major}
          />
          <Form.Input
            name="memSince"
            onChange={this.handleChange}
            value={this.props.member.memSince}
          />
          <Button
            color="red"
            icon="close"
            onClick={() => this.props.deleteMember(this.props.index)}
          />
        </Form.Group>
      </Form>
    );
  }
}

export default EditMember;
