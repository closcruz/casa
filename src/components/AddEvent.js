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
    return <div />;
  }
}
