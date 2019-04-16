import React, { Component } from 'react';
import './css/BigPicture.css';


class BigPicture extends Component {
  render() {
    return (
        <div className="bigpicture-container">
            <div className="bigpicture-img"></div>
            <div className="bigpicture-text">
                <div>Coding</div>
                <div>Gaming</div>
                <div>Living</div>    
            </div>
        </div>
    );
  }
}

export default BigPicture;
