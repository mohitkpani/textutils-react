import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "#212529",
        border: "1px solid white",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        border: "1px solid #dee2e6",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <div className="container my-4" style={myStyle}>
      <h1 className="my-3">About TextUtils</h1>

      <p>
        TextUtils is a React-based text utility application that helps users
        manipulate, analyze, and preview text quickly and easily.
      </p>

      <div className="accordion" id="textUtilsAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Text Transformation
            </button>
          </h2>

          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#textUtilsAccordion"
          >
            <div className="accordion-body" style={myStyle}>
              <ul>
                <li>Convert text to uppercase.</li>
                <li>Convert text to lowercase.</li>
                <li>Remove extra spaces between words.</li>
                <li>Clear all text with one click.</li>
                <li>Copy text to the clipboard.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Text Analysis
            </button>
          </h2>

          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#textUtilsAccordion"
          >
            <div className="accordion-body" style={myStyle}>
              <ul>
                <li>Count words in your text.</li>
                <li>Count characters in your text.</li>
                <li>Estimate the reading time.</li>
                <li>Preview text while editing.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Technologies Used
            </button>
          </h2>

          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#textUtilsAccordion"
          >
            <div className="accordion-body" style={myStyle}>
              <ul>
                <li>React.js for building the user interface.</li>
                <li>JavaScript for text processing and interactivity.</li>
                <li>HTML5 and CSS3 for structure and styling.</li>
                <li>Bootstrap for responsive UI components.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">
          {btnText}
        </button>
      </div>
    </div>
  );
}
