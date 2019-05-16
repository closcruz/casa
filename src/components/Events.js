import React, { Component } from "react";
import { Grid, Header, Button, Modal } from "semantic-ui-react";
import base from "../base";
import AddEvent from "./AddEvent";
import EditEventPicker from "./EditEventPicker";
import Event from "./Event";

class Events extends Component {
  constructor() {
    super();
    this.state = {
      events: {}
    };
  }

  componentDidMount() {
    this.ref = base.syncState("events", {
      context: this,
      state: "events"
    });
  }

  addEvent = event => {
    const newEvent = { ...this.state.events }; //1. Copy existing state
    newEvent[`event${Date.now()}`] = event; //2. Make new event with key being current time
    this.setState({ events: newEvent }); //3. Set new event into state
    console.log("Adding new event!");
  };

  updateEvent = (key, updateEvent) => {
    const events = { ...this.state.events };
    events[key] = updateEvent;
    this.setState({ events });
    console.log(`Updating event: ${events[key]}`);
  };

  deleteEvent = key => {
    const events = { ...this.state.events };
    events[key] = null;
    this.setState({ events });
  };

  render() {
    return (
      <Grid container>
        <Modal size="large" trigger={<Button>Edit Events</Button>}>
          <Modal.Header>Editing Events</Modal.Header>
          <Modal.Content>
            <Grid columns={2}>
              <Grid.Column width={5}>
                <AddEvent addEvent={this.addEvent} />
              </Grid.Column>
              <Grid.Column>
                <EditEventPicker
                  events={this.state.events}
                  updateEvent={this.updateEvent}
                  deleteEvent={this.deleteEvent}
                />
              </Grid.Column>
            </Grid>
          </Modal.Content>
        </Modal>
        <Grid.Row centered>
          <Header as="h2">Upcoming Events</Header>
        </Grid.Row>
        <Grid.Row>
          {Object.keys(this.state.events).map(key => (
            <Event key={key} index={key} details={this.state.events[key]} />
          ))}
        </Grid.Row>
      </Grid>
    );
  }
}

export default Events;
