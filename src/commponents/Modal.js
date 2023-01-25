import React from "react";
import ReactDom from "react-dom";
import { MdOutlineDownloadDone } from "react-icons/md";
const Modal = ({close}) => {
  return ReactDom.createPortal(
    <>
      <div className="model-content">
        <MdOutlineDownloadDone className="doneIcon" />
        <h3>added Succesfuly</h3>
        <button onClick={close}>close</button>
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
