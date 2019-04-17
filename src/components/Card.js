import React, { Component } from 'react';
import './css/Card.css';


class Card extends Component {
  render() {

    const url = this.props.photo

    return (
      <div className="card-content">
        <a href={this.props.link} target="_blank">
          <div style={{backgroundImage: `url(${url})`}} className="card-container">
            <div className='card-namecyrcle'>
                <div className="card-name">{this.props.name}</div>
            </div>    
          </div>
        </a>
        <div className="card-disc">{this.props.disc}</div>
      </div>  
    );
  }
}

export default Card;
