import React, { Component } from "react";
import "./css/Footer.css";
import githubpic from "../img/github.png";

//view of footer
class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-github">
          <a href="https://github.com/dihlo/mytona">
            <img src={githubpic} alt="github" />
          </a>
        </div>
        <div className="footer-tomytona">
          Специально для выполнения тестового задания для MyTona LLC
        </div>
      </div>
    );
  }
}

export default Footer;
