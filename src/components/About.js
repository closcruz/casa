import React, { Component } from "react";
import Member from "./Member";
import sampleMembers from "../sample-member";
import MemberForms from "./MemberForms";

class About extends Component {
  state = {
    members: {}
  };

  addMember = member => {
    const newMember = { ...this.state.members }; //1. Take copy of existing state
    newMember[`member${Date.now()}`] = member; //2. Add new member
    this.setState({ members: newMember }); //3. Set new state with new member
    console.log("Adding new member!");
  };

  updateMember = (key, member) => {};

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
        <MemberForms members={this.state.members} addMember={this.addMember} />
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
