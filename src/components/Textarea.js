import React, { useState } from "react";

export default function Textarea(props) {
  const [initialCase, setCase] = useState("");

  const onchange = (event) => {
    setCase(event.target.value);
  };

  const ToUpperCase = () => {
    let newCase = initialCase.toUpperCase();
    setCase(newCase);
  };

  const ToLowerCase = () => {
    let newCase = initialCase.toLowerCase();
    setCase(newCase);
  };

  const RemoveSpaces = () => {
    let Remove = initialCase.split(/[ ]+/);
    setCase(Remove.join(" "));
  };

  const ToClear = () => {
    setCase("");
  };

  const ToCopy = () => {
    let copy = document.getElementById("textbox");
    navigator.clipboard.writeText(copy.value);
  };

  return (
    <>
      <div className="container ">
        <label htmlFor="textbox">
          <h2>{props.heading}</h2>
        </label>
        <textarea
          className="form-control"
          id="textbox"
          rows="6"
          value={initialCase}
          onChange={onchange}
        />
        <button className="btn-primary my-2 mr-2" onClick={ToUpperCase}>
          ToUpperCase
        </button>
        <button className="btn-danger my-2 mx-2" onClick={ToLowerCase}>
          ToLowerCase
        </button>
        <button className="btn-success my-2 mx-2" onClick={RemoveSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn-danger my-2 mx-2" onClick={ToClear}>
          Clear Text
        </button>
        <button className="btn-dark my-2 mx-2" onClick={ToCopy}>
          Copy Text
        </button>
      </div>

      <div className="container">
        <h1 className="my-2">Your Text Summary</h1>
        <div className="review">
          <strong>
            {initialCase.split(" ").filter((word) => word !== "").length}
          </strong>{" "}
          Words and <strong>{initialCase.length}</strong> Characters
          <p>
            To Read it takes{" "}
            <strong style={{ color: "red" }}>
              {0.008 * initialCase.length}
            </strong>{" "}
            Minutes{" "}
          </p>
          <h2>Preview Your Text</h2>
          <p>{initialCase}</p>
        </div>
      </div>
    </>
  );
}
