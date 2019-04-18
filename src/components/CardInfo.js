import React, { Component } from 'react';
import './css/CardInfo.css';

class CardInfo extends Component {
  render() {

    const params = new URLSearchParams(this.props.location.search);
    const name = params.get('name'); 
    const link = params.get('link');
    const photo = params.get('photo'); 
    const disc = params.get('disc');   

    return (
      <div className="cardinfo-container">
        <p><b>Имя: {name}</b></p>
        <a href={link} target="_blank" ><p>Ссылка на сайт</p></a>
        <a href={link} target="_blank" ><div style={{backgroundImage: `url(${photo})`}}/></a>
        <p>Описание: {disc}</p>
      </div>  
    );
  }
}

export default CardInfo;
