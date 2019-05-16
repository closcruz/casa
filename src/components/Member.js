import React from "react";
import { Card, Image } from "semantic-ui-react";
import PropTypes from "prop-types";

const Member = props => (
  <Card centered>
    <Card.Content>
      <Image
        src="https://via.placeholder.com/75"
        floated="left"
        size="small"
        ui={false}
        wrapped
        spaced
      />
      <Card.Header textAlign="right">{props.details.name}</Card.Header>
      <Card.Meta textAlign="right">
        Member Since: {props.details.memSince}
      </Card.Meta>
      <Card.Description>
        <p>Position: {props.details.position}</p>
        <p>Major: {props.details.major}</p>
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
