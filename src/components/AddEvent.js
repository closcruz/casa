import React, { Component } from "react";
import PropTypes from "prop-types";

class AddEvent extends Component {
  titleRef = React.createRef();
  dateRef = React.createRef();
  descRef = React.createRef();

  static propTypes = {
    addEvent: PropTypes.func
  };

  createEvent = e => {
    e.preventDefault();

    const event = {
      title: this.titleRef.current.value,
      date: this.dateRef.current.value,
      desc: this.descRef.current.value
    };

    this.props.addEvent(event);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="event-add" onSubmit={this.createEvent}>
        <input
          name="title"
          type="text"
          placeholder="Title of Event"
          ref={this.titleRef}
        />
        <input
          name="date"
          type="text"
          placeholder="Date of Event"
          ref={this.dateRef}
        />
        <textarea name="desc" placeholder="Description" ref={this.descRef} />
        <button type="submit">Add Event</button>
      </form>
    );
  }
}

export default AddEvent;
