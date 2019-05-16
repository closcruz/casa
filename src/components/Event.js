import React from "react";
import { Card } from "semantic-ui-react";
import PropTypes from "prop-types";

const Event = props => (
  <Card>
    <Card.Content textAlign="center">
      <Card.Header content={props.details.title} />
      <Card.Meta content={props.details.date} />
      <Card.Description content={props.details.desc} />
    </Card.Content>
  </Card>
);

Event.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    desc: PropTypes.string
  })
};

export default Event;
