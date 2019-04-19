import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./css/Card.css";

import del from "../img/del.svg";
import edit from "../img/edit.svg";

import { openModal } from "../actions";

//one card with name link photo discription rendering component 
class Card extends Component {
  constructor() {
    super();

    this.state = {};
  }

  //close open modal window logic
  openModalHandler = param => () => {
    this.props.openModal(true, this.props.item, param);
  };

  closeModalHandler = () => {
    this.props.openModal(false, this.props.item);
  };

  render() {
    const { name, disc, link, photo } = this.props.item;
    const url = photo;
    const cardinfourl = "/cardinfo?name=" + name + "&disc=" + disc + "&photo=" + url + "&link=" + link;
    return (
      <div className="card-content">
        <a href={cardinfourl}>
          <div
            style={{ backgroundImage: `url(${url})` }}
            className="card-container"
          >
            <div className="card-namecyrcle">
              <div className="card-name">{name}</div>
            </div>
          </div>
        </a>
        <div className="card-del-edit">
          <div onClick={this.openModalHandler("edit")}>
            <img src={edit} alt="" />
          </div>
          <div onClick={this.openModalHandler("del")}>
            <img src={del} alt="" />
          </div>
        </div>
        <div className="card-disc">{disc}</div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { show, param } = state.modal.modal;
  return { show, param };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ openModal: openModal }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Card);
