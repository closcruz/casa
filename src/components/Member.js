import React from "react";
import PropTypes from "prop-types";

const Member = props => (
  <div>
    <li className="member-item">
      <h3 className="member-name">{props.details.name}</h3>
      <h4 className="member-pos">{props.details.position}</h4>
      <p className="member-email">{props.details.email}</p>
      <p className="member-major">{props.details.major}</p>
      <p className="member-memSince">{props.details.memSince}</p>
    </li>
  </div>
);

Member.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
    email: PropTypes.string,
    major: PropTypes.string,
    memSince: PropTypes.string
  })
};

export default Member;
