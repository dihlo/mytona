import React, { Component } from "react";
import "./css/Home.css";
import BigPicture from "./BigPicture";

//view of home
class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <BigPicture />
      </div>
    );
  }
}

export default Home;
