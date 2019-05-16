import React, { Component } from "react";
import { Form, Header, Button } from "semantic-ui-react";
import PropTypes from "prop-types";

class AddEvent extends Component {
  static propTypes = {
    addEvent: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      date: "",
      desc: ""
    };
  }

  createEvent = e => {
    e.preventDefault();

    const { title, date, desc } = this.state;
    const event = {
      title: title,
      date: date,
      desc: desc
    };

    this.props.addEvent(event);
    e.currentTarget.reset();
  };

  handleChange = e => {
    const newState = { ...this.state };
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  render() {
    return (
      <Form onSubmit={this.createEvent}>
        <Header as="h4">Add new Event</Header>
        <Form.Input
          fluid
          placeholder="Name of Event"
          name="title"
          onChange={this.handleChange}
        />
        <Form.Input
          fluid
          placeholder="Date of Event"
          name="date"
          onChange={this.handleChange}
        />
        <Form.Input
          fluid
          placeholder="Description"
          name="desc"
          onChange={this.handleChange}
        />
        <Button fluid size="small" color="blue" icon="plus" />
      </Form>
    );
  }
}

export default AddEvent;
