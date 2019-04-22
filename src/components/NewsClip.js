import React from "react";
import PropTypes from "prop-types";

const NewsClip = props => (
  <li className="news-item">
    <h2 className="news-title">{props.details.title}</h2>
    <h4 className="date-posted">{props.details.postedOn}</h4>
    <p className="news-preview">{props.details.desc}</p>
  </li>
);

NewsClip.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string,
    postedOn: PropTypes.string,
    desc: PropTypes.string
  })
};

export default NewsClip;
