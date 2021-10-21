import React from "react";
import "./ThirdQuestion.css";
import ButtonNextQuestion from "./ButtonNextPage";

const ThirdQuestion = ({ ageInput, onAgeInputChange, handleSubmit }) => {
  const ageGroup = ["JavaScript", "Sleeping in", "HTML", "CSS", "React"];

  return (
    <form onSubmit={handleSubmit} id="thirdQuestion" className="form">
      <h2 className="page-header">third question</h2>
      <p>Select your passion</p>
      {ageGroup.map(group => (
        // <div className="wrapper">
        <label className="radiobutton-container" key={group}>
          <input
            className="input"
            type="radio"
            required
            value={group}
            onChange={onAgeInputChange}
            checked={ageInput === group}
          />
          <span className="custom-radio"></span>
          <p>{group}</p>
        </label>
        // </div>
      ))}

      <ButtonNextQuestion />
    </form>
  );
};

export default ThirdQuestion;
