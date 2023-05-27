import React from "react";

export default function Alert() {
  return (
  <div style={{height:"50px"}}>
      <div 
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>Welcome</strong> to My Textutils.
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
  );
}
