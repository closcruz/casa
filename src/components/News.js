import React, { Component } from "react";
import base from "../base";
import { Grid, Header, Button, Modal } from "semantic-ui-react";
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
    const { me } = this.props;

    return (
      <Grid container>
        <Modal
          size="large"
          trigger={me ? <Button floated="right">Edit News</Button> : null}
        >
          <Modal.Content>
            <Grid columns={2}>
              <Grid.Column width={5}>
                <AddNews addArticle={this.addArticle} />
              </Grid.Column>
              <Grid.Column>
                {/* <EditEventPicker
                  events={this.state.articles}
                  updateArticle={this.updateArticle}
                  deleteArticle={this.deleteArticle}
                /> */}
              </Grid.Column>
            </Grid>
          </Modal.Content>
        </Modal>
        <Grid.Row centered>
          <Header as="h2">News of Interest</Header>
        </Grid.Row>
        <Grid.Row>
          {Object.keys(this.state.articles).map(key => (
            <NewsClip
              key={key}
              index={key}
              details={this.state.articles[key]}
            />
          ))}
        </Grid.Row>
      </Grid>
    );
  }
}

export default News;
