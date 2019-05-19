import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Menu, Header, Grid, Button } from "semantic-ui-react";
import { firebaseApp } from "./base";
import Home from "./components/Home";
import About from "./components/About";
import News from "./components/News";
import Events from "./components/Events";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import withAuthProtection from "./withAuthProtection";

const ProtectedRoute = withAuthProtection("/login")(About);
class App extends Component {
  constructor() {
    super();
    this.state = {
      me: firebaseApp.auth().currentUser
    };
  }

  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged(me => {
      this.setState({ me });
    });
  }

  handleLogin = history => (email, password) => {
    return firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        return history.push("/");
      });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header
            as="h1"
            color="orange"
            textAlign="center"
            style={{ fontSize: 80 }}
          >
            CASA
          </Header>
          <Grid centered>
            <Menu compact borderless style={{ fontSize: 18, marginBottom: 20 }}>
              <Menu.Item as={Link} to="/">
                Home
              </Menu.Item>
              <Menu.Item as={Link} to="/news">
                News
              </Menu.Item>
              <Menu.Item as={Link} to="/events">
                Events
              </Menu.Item>
              <Menu.Item as={Link} to="/about">
                About Us
              </Menu.Item>
              {this.state.me && (
                <Menu.Item position="right">
                  <Button
                    color="blue"
                    onClick={async () => await firebaseApp.auth().signOut()}
                  >
                    Log out
                  </Button>
                </Menu.Item>
              )}
            </Menu>
          </Grid>
          <Grid>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/news" render={() => <News me={this.state.me} />} />
              <Route
                path="/events"
                render={() => <Events me={this.state.me} />}
              />
              <Route
                path="/about"
                render={() => <About me={this.state.me} />}
              />
              <Route
                path="/login"
                render={({ history }) => (
                  <Login onSubmit={this.handleLogin(history)} />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </Grid>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
