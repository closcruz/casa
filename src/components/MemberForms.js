import React, { Component } from "react";
import PropTypes from "prop-types";
import AddMember from "./AddMember";
import EditMember from "./EditMembers";

class MemberForms extends Component {
  // TODO implement state for checking authentication for editing member list
  render() {
    return (
      <div className="member-forms">
        <h4>Edit Member List</h4>
        {Object.keys(this.props.member).map(key => (
          <EditMember key={key} index={key} member={this.props.member[key]} />
        ))}
        <AddMember addMember={this.props.addMember} />
      </div>
    );
  }
}

export default MemberForms;
