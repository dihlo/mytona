import React from "react";

import "./css/Modal.css";

//view of modal
const modal = props => {
  return (
    <div
      className="modal-wrapper"
      //visible and unvisible modal logic
      style={{
        transform: props.show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      <div className="modal-body">{props.children}</div>
      <div className="modal-footer">
        <button className="btn-cancel" onClick={props.close}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default modal;
