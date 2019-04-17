import React, { Component } from 'react';
import './css/TopMenu.css';


class TopMenu extends Component {
  render() {
    return (
        <div className="topmenu-navbar">
            <div className="topmenu-navbar-onmiddle">
                <div className="topmenu-navbar-textlogo">Бугаев Андрей</div>
                <div className="topmenu-navbar-toright">              
                    <a href="./">Главная</a>
                    <a href="./about">Обо мне</a>
                    <a href="./contacts">Контакты</a>
                    <a href="/portfolio">Портфолио</a>
                </div>    
            </div>
        </div>
    );
  }
}

export default TopMenu;
