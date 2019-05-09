import React, { Component } from "react";
import PropTypes from "prop-types";
import AddMember from "./AddMember";
import EditMember from "./EditMembers";

class MemberForms extends Component {
  static propTypes = {
    members: PropTypes.object,
    addMember: PropTypes.func,
    updateMember: PropTypes.func,
    deleteMember: PropTypes.func
  };

  render() {
    return (
      <div className="member-forms">
        <h4>Edit Member List</h4>
        {Object.keys(this.props.members).map(key => (
          <EditMember
            key={key}
            index={key}
            member={this.props.members[key]}
            updateMember={this.props.updateMember}
            deleteMember={this.props.deleteMember}
          />
        ))}
        <AddMember addMember={this.props.addMember} />
      </div>
    );
  }
}

export default MemberForms;
