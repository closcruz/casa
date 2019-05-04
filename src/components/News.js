import React, { Component } from "react";
import base from "../base";
import AddNews from "./AddNews";
import EditNews from "./EditNews";
import NewsClip from "./NewsClip";

class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: {}
    };
  }

  componentDidMount() {
    this.ref = base.syncState("articles", {
      context: this,
      state: "articles"
    });
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
        {Object.keys(this.state.articles).map(key => (
          <NewsClip key={key} index={key} details={this.state.articles[key]} />
        ))}
        <AddNews addArticle={this.addArticle} />
        <h4>Edit News</h4>
        {Object.keys(this.state.articles).map(key => (
          <EditNews
            key={key}
            index={key}
            article={this.state.articles[key]}
            updateArticle={this.updateArticle}
            deleteArticle={this.deleteArticle}
          />
        ))}
      </div>
    );
  }
}

export default News;
