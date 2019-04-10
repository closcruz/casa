import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import News from "./components/News";
import Events from "./components/Events";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
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
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/events" component={Events} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
