import React, { Component } from "react";
import NewsClip from "./NewsClip";

class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: {}
    };
  }

  addArticle = article => {
    const articles = { ...this.state.articles };
    articles[`article${Date.now()}`] = article;
    this.setState({ articles });
    console.log("Adding news article");
  };

  updateArticle = (key, updateArticle) => {
    const articles = { ...this.state.articles };
    articles[key] = updateArticle;
    this.setState({ articles });
    console.log(`Updating article: ${articles[key]}`);
  };

  deleteArticle = key => {
    const articles = { ...this.state.articles };
    articles[key] = null;
    this.setState({ articles });
  };

  render() {
    return (
      <div>
        <h2>News</h2>
      </div>
    );
  }
}

export default News;
