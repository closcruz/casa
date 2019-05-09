import React, { Component } from "react";
import base from "../base";
import Member from "./Member";
import MemberForms from "./MemberForms";
import sampleMembers from "../sample-member";
import { Grid, Header } from "semantic-ui-react";

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
      <Grid columns={3}>
        <Grid.Row centered>
          <Header as="h3">Abour Our Organization</Header>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ fontSize: 20 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Pellentesque adipiscing commodo elit at imperdiet dui. Ac tortor
            dignissim convallis aenean. Sem et tortor consequat id. Dolor morbi
            non arcu risus quis varius quam. Bibendum enim facilisis gravida
            neque convallis a cras semper auctor. Bibendum at varius vel
            pharetra vel turpis nunc eget lorem. Nunc faucibus a pellentesque
            sit. Id cursus metus aliquam eleifend mi in nulla posuere. Et
            sollicitudin ac orci phasellus egestas tellus rutrum tellus.
            Praesent semper feugiat nibh sed pulvinar proin. Elementum eu
            facilisis sed odio morbi quis commodo odio aenean. Turpis egestas
            integer eget aliquet nibh praesent tristique magna sit. Odio morbi
            quis commodo odio aenean sed adipiscing diam. Nisi est sit amet
            facilisis magna etiam tempor. Vehicula ipsum a arcu cursus. Cras
            pulvinar mattis nunc sed blandit libero volutpat sed cras.
            Pellentesque sit amet porttitor eget. Pretium quam vulputate
            dignissim suspendisse in est ante in. Metus vulputate eu scelerisque
            felis imperdiet. Ipsum dolor sit amet consectetur adipiscing. Sed
            blandit libero volutpat sed. Fermentum dui faucibus in ornare.
          </Grid.Column>
          <Grid.Column>
            <ul className="members-list">
              {Object.keys(this.state.members).map(key => (
                <Member
                  key={key}
                  index={key}
                  details={this.state.members[key]}
                />
              ))}
            </ul>
          </Grid.Column>
          <Grid.Column>
            <MemberForms
              members={this.state.members}
              addMember={this.addMember}
              updateMember={this.updateMember}
              deleteMember={this.deleteMember}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      // <div className="about">
      //   <h2>About our organization</h2>
      //   <p>
      //     A good chunk of text will go here and this is place holder text for
      //     the purpose of styling and seeing how a paragraph about the group
      //     would look like. A picture can be placed on this page as well. Will
      //     definitely have to discuss this with board members for them to come up
      //     with what they officially want on here.
      //   </p>
      //   <h3>Current members are:</h3>
      //   <div className="about-container">
      //     <MemberForms
      //       members={this.state.members}
      //       addMember={this.addMember}
      //       updateMember={this.updateMember}
      //       deleteMember={this.deleteMember}
      //     />
      // <ul className="members-list">
      //   {Object.keys(this.state.members).map(key => (
      //     <Member key={key} index={key} details={this.state.members[key]} />
      //   ))}
      // </ul>
      //   </div>
      //   <button onClick={this.loadSampleMembers}>Load Sample Members</button>
      // </div>
    );
  }
}

export default About;
