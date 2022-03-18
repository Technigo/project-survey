import React from "react";
import images from "../images/tech-work.png";

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
  //  const { nameInput, onNameInputChange } = props;

  return (
    <section className="form-container">
      <div className="heading">
        <h1>What kind of code student are you?</h1>
      </div>

      <div className="form-image">
        <img
          className="tech-work-img"
          src={images}
          alt="student learning tech"
        />
      </div>

      <form>
        <h2>Let's get stated by writing your name: </h2>
        <label className="description" htmlFor="nameInput">
          First name / nickname{" "}
        </label>
        <input
          className="name-input"
          id="nameInput"
          type="text"
          value={nameInput}
          onChange={onNameInputChange}
        />
        <button onClick={onStepChange}>
          {" "}
          Let's start with the questions!{" "}
        </button>
      </form>
    </section>
  );
};

export default FirstQuestion;
