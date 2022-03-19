import React from "react";

const Intro = ({ onNextStepChange }) => {
  return (
    <>
      <section className="head-section" id="intro">
        <p className="thin-intro-text">Hello</p>
        <h2 className="question-text">
          We all know that Mondays can be rough, so let's create a mantra
          together?
        </h2>
        <button type="submit" onClick={onNextStepChange} className="btn start-btn"> Let's!
        </button>
      </section>
    </>
  );
};

export default Intro;
