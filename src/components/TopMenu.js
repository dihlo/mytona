import React, { Component } from "react";
import "./css/TopMenu.css";

//view top menu 
class TopMenu extends Component {
  render() {
    return (
      <div className="topmenu-navbar">
        <div className="topmenu-navbar-onmiddle">
          <div className="topmenu-navbar-textlogo"><a href="./"><b>Бугаев Андрей</b></a></div>
          <div className="topmenu-navbar-toright">
            <a className="topmenu-navbar-a" href="./">Главная</a>
            <a className="topmenu-navbar-a" href="./about">Обо мне</a>
            <a className="topmenu-navbar-a" href="./contacts">Контакты</a>
            <a className="topmenu-navbar-a" href="./portfolio">Портфолио</a>
          </div>
        </div>
      </div>
    );
  }
}

export default TopMenu;
