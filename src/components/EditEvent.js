import React, { Component } from "react";
import PropTypes from "prop-types";

class EditEvent extends Component {
  static propTypes = {
    event: PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string,
      desc: PropTypes.string
    }),
    index: PropTypes.string,
    updateEvent: PropTypes.func,
    deleteEvent: PropTypes.func
  };

  handleChange = e => {
    const updateEvent = {
      ...this.props.event,
      [e.currentTarget.name]: e.currentTarget.value
    };
    this.props.updateEvent(this.props.index, updateEvent);
  };

  render() {
    return (
      <div className="event-edit">
        <input
          name="title"
          type="text"
          onChange={this.handleChange}
          value={this.props.event.title}
        />
        <input
          name="date"
          type="text"
          onChange={this.handleChange}
          value={this.props.event.date}
        />
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.event.desc}
        />
        <button onClick={() => this.props.deleteEvent(this.props.index)}>
          &times;
        </button>
      </div>
    );
  }
}

export default EditEvent;
