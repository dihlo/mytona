import React, { Component } from 'react';
import './css/Footer.css';
import githubpic from '../img/github.png';

class Footer extends Component {
  render() {
    return (
        <div className="footer-container">
            <div className="footer-github">
              <img src={githubpic} alt="github"/>
            </div>
            <div className="footer-tomytona">
              Специально для выполнения тестового задания для LLC MyTona
            </div>
        </div>
    );
  }
}

export default Footer;
