import React, { Component } from "react";
import PropTypes from "prop-types";

class Member extends Component {
  render() {
    const { name, position, email, major, memSince } = this.props.details;
    return (
      <div>
        <li className="member-item">
          <h3 className="member-name">{name}</h3>
          <h4 className="member-pos">{position}</h4>
          <p className="email">{email}</p>
          <p className="major">{major}</p>
          <p className="memSince">{memSince}</p>
        </li>
      </div>
    );
  }
}

export default Member;
