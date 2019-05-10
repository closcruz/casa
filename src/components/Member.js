import React from "react";
import { Card, Image } from "semantic-ui-react";
import PropTypes from "prop-types";

const Member = props => (
  <Card centered>
    <Image src="https://via.placeholder.com/100" wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.details.name}</Card.Header>
      <Card.Meta>Member Since: {props.details.memSince}</Card.Meta>
      <Card.Description>
        Position: {props.details.position} - Major: {props.details.major}
      </Card.Description>
      <Card.Description>Email: {props.details.email}</Card.Description>
    </Card.Content>
  </Card>
);

Member.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
    email: PropTypes.string,
    major: PropTypes.string,
    memSince: PropTypes.string
  })
};

export default Member;
