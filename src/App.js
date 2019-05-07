import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import base, { firebaseApp } from "./base";
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
    console.log("user", firebaseApp.auth().currentUser);
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
          <div className="header">
            <h2 className="casa-big">
              <Link to="/">CASA</Link>
            </h2>
            <ul className="nav-bar">
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
            {this.state.me && (
              <button onClick={async () => await firebaseApp.auth().signOut()}>
                Logout
              </button>
            )}
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/events" component={Events} />
            <Route
              path="/about"
              render={props => <ProtectedRoute {...props} me={this.state.me} />}
            />
            <Route
              path="/login"
              render={({ history }) => (
                <Login onSubmit={this.handleLogin(history)} />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
