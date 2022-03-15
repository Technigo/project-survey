import React from "react";

const Intro = ({ onNextStepChange }) => {
  return (
    <>
      <section id="intro" className="section">
        <h1 className="header-text">
          We all know that Mondays can be rough, so let's create a todo-list
          together?
        </h1>
      </section>
      <button type="submit" onClick={onNextStepChange} className="start-btn">
        <a href="#one">let's! </a>
      </button>
    </>
  );
};

export default Intro;
