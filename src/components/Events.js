import React, { Component } from "react";

class Events extends Component {
  constructor() {
    super();
    this.state = {
      events: {}
    };
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
      <div className="events">
        <h2>Upcoming Events</h2>
      </div>
    );
  }
}

export default Events;
