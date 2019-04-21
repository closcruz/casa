import React, { Component } from "react";
import PropTypes from "prop-types";

class AddNews extends Component {
  titleRef = React.createRef();
  postedOnRef = React.createRef();
  descRef = React.createRef();

  static PropTypes = {
    addArticle: PropTypes.func.isRequired
  };

  createArticle = e => {
    e.preventDefault();

    const article = {
      title: this.titleRef.current.value,
      postedOnRef: this.postedOnRef.current.value,
      descRef: this.descRef.current.value
    };
    this.props.addArticle(article);
    e.currentTarget.reset();
  };

  render() {
    return (
      <div>
        <form className="article-add" onSubmit={this.createArticle}>
          <input
            name="title"
            type="text"
            placeholder="Title"
            ref={this.titleRef}
          />
          <input
            name="postedOn"
            type="text"
            placeholder="Date when posted"
            ref={this.postedOnRef}
          />
          <textarea
            name="desc"
            placeholder="Whats the news??"
            ref={this.descRef}
          />
          <button type="submit">Add article</button>
        </form>
      </div>
    );
  }
}

export default AddNews;
