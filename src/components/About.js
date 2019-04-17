import React, { Component } from 'react';
import './css/About.css';

class About extends Component {
  render() {
    return (
        <div className="about-container">
            <div className="about-onmiddle">
                <div className="about-text">FrontEnd разработчик на ReactJS и ReactNative</div>
                <div className="about-text"><a href="https://zety.com/mycv/bugaevandrey">Резюме</a></div>
            </div>  
        </div>
    );
  }
}

export default About;
