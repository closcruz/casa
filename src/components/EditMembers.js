import React, { Component } from "react";
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
      <div className="member-edit">
        <input
          name="name"
          type="text"
          onChange={this.handleChange}
          value={this.props.member.name}
        />
        <input
          name="position"
          type="text"
          onChange={this.handleChange}
          value={this.props.member.position}
        />
        <input
          name="email"
          type="text"
          onChange={this.handleChange}
          value={this.props.member.email}
        />
        <input
          name="major"
          type="text"
          onChange={this.handleChange}
          value={this.props.member.major}
        />
        <input
          name="memSince"
          type="text"
          onChange={this.handleChange}
          value={this.props.member.memSince}
        />
        <button onClick={() => this.props.deleteMember(this.props.index)}>
          Remove Member
        </button>
      </div>
    );
  }
}

export default EditMember;
