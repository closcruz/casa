import React, { Component } from "react";
import PropTypes from "prop-types";
import AddEvent from "./AddEvent";
import EditEvent from "./EditEvent";

class EventForms extends Component {
  static propTypes = {
    events: PropTypes.object,
    addEvent: PropTypes.func,
    updateEvent: PropTypes.func,
    deleteEvent: PropTypes.func
  };
  // TODO implement state for checking authentication for editing Event list
  render() {
    return (
      <div className="Event-forms">
        <h4>Edit Event List</h4>
        {Object.keys(this.props.events).map(key => (
          <EditEvent
            key={key}
            index={key}
            event={this.props.events[key]}
            updateEvent={this.props.updateEvent}
            deleteEvent={this.props.deleteEvent}
          />
        ))}
        <AddEvent addEvent={this.props.addEvent} />
      </div>
    );
  }
}

export default EventForms;
