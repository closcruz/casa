import React from "react";

const Home = props => (
  <div className="home">
    <h2>Welcome to the Central American Student Association Webpage</h2>
    <p>Currently logged in with id: {props.uid}</p>
  </div>
);

export default Home;
