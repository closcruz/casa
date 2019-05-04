import React, { Component } from "react";
import PropTypes from "prop-types";

class EditNews extends Component {
  static propTypes = {
    article: PropTypes.shape({
      title: PropTypes.string,
      postedOn: PropTypes.string,
      desc: PropTypes.string
    }),
    index: PropTypes.string,
    updateArticle: PropTypes.func,
    deleteArticle: PropTypes.func
  };

  handleChange = e => {
    const updateNews = {
      ...this.props.news,
      [e.currentTarget.name]: e.currentTarget.value
    };
    this.props.updateArticle(this.props.index, updateNews);
  };

  render() {
    return (
      <div className="news-edit">
        <input
          name="title"
          type="text"
          onChange={this.handleChange}
          value={this.props.article.title}
        />
        <input
          name="postedOn"
          type="text"
          onChange={this.handleChange}
          value={this.props.article.postedOn}
        />
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.article.desc}
        />
        <button onClick={() => this.props.deleteArticle(this.props.index)}>
          &times;
        </button>
      </div>
    );
  }
}

export default EditNews;
