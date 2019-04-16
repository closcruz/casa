import React, { Component } from "react";
import PropTypes from "prop-types";

const Event = props => {
  <li className="event-item">
    <h3 className="event-title">{props.details.title}</h3>
    <h4 className="event-date">{props.details.date}</h4>
    <p className="event-desc">{props.details.desc}</p>
  </li>;
};

Event.PropTypes = {
  details: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    desc: PropTypes.string
  })
};

export default Event;
