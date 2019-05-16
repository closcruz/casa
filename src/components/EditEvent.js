import React, { Component } from "react";
import { Form, Header, Button } from "semantic-ui-react";
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
      <Form>
        <Header as="h4">Edit Events</Header>
        <Form.Group>
          <Form.Input
            name="title"
            value={this.props.event.title}
            onChange={this.handleChange}
          />
          <Form.Input
            name="date"
            value={this.props.event.date}
            onChange={this.handleChange}
          />
          <Form.Input
            name="desc"
            value={this.props.event.description}
            onChange={this.handleChange}
          />
          <Button
            color="red"
            icon="close"
            onClick={() => this.props.deleteEvent(this.props.index)}
          />
        </Form.Group>
      </Form>
    );
  }
}

export default EditEvent;
