import React, { Component } from 'react';
import './css/Contacts.css';

//import img
import telegram from '../img/telegram.svg';
import phone from '../img/phone.svg';
import email from '../img/email.svg';

class Contacts extends Component {
  render() {
    return (
        <div className="contacts-container">
            <div className="contacts-onmiddle">
                <div className="contacts-text"><b>Если вам стало интересно свяжитесь со мной!</b></div>
                <div className="contacts-telegramm"><img src={telegram} alt=""/> https://t.me/dihloykt</div>
                <div className="contacts-phone"><img src={phone} alt=""/> +7 (962) 733 33 70</div>
                <div className="contacts-email"><img src={email} alt=""/> dihlo1@yandex.ru</div>
            </div>  
        </div>
    );
  }
}

export default Contacts;
