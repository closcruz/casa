import React, { Component } from "react";
import base from "../base";
import Member from "./Member";
import MemberForms from "./MemberForms";
import sampleMembers from "../sample-member";

class About extends Component {
  state = {
    members: {}
  };

  componentDidMount() {
    this.ref = base.syncState("members", {
      context: this,
      state: "members"
    });
  }

  addMember = member => {
    const newMember = { ...this.state.members }; //1. Take copy of existing state
    newMember[`member${Date.now()}`] = member; //2. Add new member
    this.setState({ members: newMember }); //3. Set new state with new member
    console.log("Adding new member!");
  };

  updateMember = (key, updateMember) => {
    const members = { ...this.state.members }; //1. Take copy of existing state
    members[key] = updateMember; //2. Lookup member to be updated and change details
    this.setState({ members }); //3. Update state
    console.log(`Updating member ${members[key]}`);
  };

  deleteMember = key => {
    const members = { ...this.state.members }; //1. Copy existing state
    members[key] = null; //2. Remove by setting choosen member to null so it reflects on db
    this.setState({ members }); //3. Set new state
  };

  loadSampleMembers = () => {
    this.setState({ members: sampleMembers });
  };

  render() {
    return (
      <div>
        <h2>About our organization</h2>
        <hr />
        <p>
          A good chunk of text will go here and this is place holder text for
          the purpose of styling and seeing how a paragraph about the group
          would look like. A picture can be placed on this page as well. Will
          definitely have to discuss this with board members for them to come up
          with what they officially want on here.
        </p>
        <h3>Current members are:</h3>
        <MemberForms
          members={this.state.members}
          addMember={this.addMember}
          updateMember={this.updateMember}
          deleteMember={this.deleteMember}
        />
        <ul className="members-list">
          {Object.keys(this.state.members).map(key => (
            <Member key={key} index={key} details={this.state.members[key]} />
          ))}
        </ul>
        <button onClick={this.loadSampleMembers}>Load Sample Members</button>
      </div>
    );
  }
}

export default About;
