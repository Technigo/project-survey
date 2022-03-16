import React from "react";

const Info = ({ onStepChange }) => {
  return (
    <section id="#intro" className="section">
      <div className="intro-text">
        <label>Hello, let's dream about SUMMER in SWEDEN</label>
        <h1>Fill out our short survey to tell us about your travel plans!</h1>
      </div>
      <div>
        <button type="submit" onClick={onStepChange} className="start-btn">
          <a href="#one">Yes let's!</a>
        </button>
      </div>
    </section>
  );
};

export default Info;
