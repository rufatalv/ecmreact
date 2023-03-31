import React from "react";
import ReactDOM from "react-dom" 
import './styles.scss'
const Preloader = (props) => {
  return ReactDOM.createPortal(
    <div>
      loading
    </div>,
    document.getElementById("preloader")
  );
};

export default Preloader;
