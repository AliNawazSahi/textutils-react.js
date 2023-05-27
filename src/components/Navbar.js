import React from "react";

export default function Navbar(props) {
  
  return (
    <nav
      className = {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
      <a className="navbar-brand" href="/">
        Textutils
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
      </div>
      <div className="custom-control custom-switch">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitch1"
          onClick={props.togglemode}
        />
        <label className={`custom-control-label text-${props.mode==="dark"?"light":"dark"}`} htmlFor="customSwitch1">{props.mode==="light"?"Enable DarkMode":"Disable DarkMode"}
        </label>
      </div>
    </nav>
  );
}
