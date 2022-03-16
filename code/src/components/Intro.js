import React from "react";

const Intro = ({ onNextStepChange }) => {
  return (
    <>
    <main>
      <section className="head-section" id="intro">
        <h2 className="header-text">
          We all know that Mondays can be rough, so let's create a todo-list
          together?
        </h2>
      </section>
      <button type="submit" onClick={onNextStepChange} className="next-btn"> let's!
      </button>
    </main>
    </>
  );
};

export default Intro;
