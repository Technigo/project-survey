import React from "react";
import Button from "./Button";

const Info = ({ onStepChange }) => {
  return (
    <section id="#intro" className="section">
      <div className="intro-text">
        <label>Hello, let's dream about SUMMER in SWEDEN</label>
        <h1>Fill out our short survey to tell us about your travel plans!</h1>
      </div>
      <div>
        <button type="submit" onClick={onStepChange} className="start-btn">
          <a href="#one">Let's go!</a>
        </button>
      </div>
    </section>
  );
};

export default Info;
