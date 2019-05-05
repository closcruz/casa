import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import base from "./base";
import Home from "./components/Home";
import About from "./components/About";
import News from "./components/News";
import Events from "./components/Events";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      props.authUser === false ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )
    }
  />
);
class App extends Component {
  constructor() {
    super();

    this.state = {
      uid: null,
      authUser: false
    };
  }

  authHandler = async authData => {
    // 1. Get all authUsers from CASA db
    const authUsers = await base.fetch("authUsers", {
      context: this,
      asArray: true
    });
    console.log(authUsers);
    // 2. Check to see if uid received from login matches uid set in db
    const isUserAuth = authUsers.includes(authData.user.uid);
    if (isUserAuth) {
      this.setState({ uid: authData.user.uid, authUser: true });
    }
    // authData will be returned after authentication with Firebase
    // Get uid from authorized user and save to state to dictate which screens are shown
    console.log(authData);
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
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/events" component={Events} />
            <PrivateRoute path="/about" component={About} />
            {/* <Route path="/about" component={About} /> */}
            <Route
              path="/login"
              render={props => (
                <Login
                  {...props}
                  user={this.state.uid}
                  authHandler={this.authHandler}
                />
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
