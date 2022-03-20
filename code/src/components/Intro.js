import React from "react";
import Star from "../images/star.png";

const Intro = ({ onNextStepChange }) => {
  return (
    <>
      <section className="head-section" id="intro">
        <img className="star star-1" src={Star} alt="star" />
        <img className="star star-2" src={Star} alt="star" />
        <img className="star star-3" src={Star} alt="star" />
        <img className="star star-4" src={Star} alt="star" />
        <p className="thin-intro-text">Hello</p>
        <h2 className="question-text">
          We all know that Mondays can be rough, so let's create a mantra
          together?
        </h2>
        <button
          type="submit"
          onClick={onNextStepChange}
          className="btn start-btn"
        >
          {" "}
          Let's!
        </button>
      </section>
    </>
  );
};

export default Intro;
