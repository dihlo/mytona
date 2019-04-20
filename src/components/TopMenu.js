import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./css/TopMenu.css";

//view top menu
class TopMenu extends Component {
  render() {
    return (
      <div className="topmenu-navbar">
        <div className="topmenu-navbar-onmiddle">
          <div className="topmenu-navbar-textlogo">
            <a href="./">
              <b>Бугаев Андрей</b>
            </a>
          </div>
          <div className="topmenu-navbar-toright">
            <NavLink
              activeClassName="active"
              className="topmenu-navbar-a"
              to="/"
              exact
            >
              Главная
            </NavLink>
            <NavLink
              activeClassName="active"
              className="topmenu-navbar-a"
              to="/about"
            >
              Обо мне
            </NavLink>
            <NavLink
              activeClassName="active"
              className="topmenu-navbar-a"
              to="/contacts"
            >
              Контакты
            </NavLink>
            <NavLink
              activeClassName="active"
              className="topmenu-navbar-a"
              to="/portfolio"
            >
              Портфолио
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default TopMenu;
