import React from "react";
import ButtonNextQuestion from "./ButtonNextPage";
import "./FourthQuestion.css";

const FourthQuestion = ({ moodInput, onMoodInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="page-header">Mood checker</h2>
      <div className="slidecontainer">
        <label htmlFor="slider">
          How do you feel today?
          <input
            type="range"
            min="1"
            max="100"
            className="slider"
            id="myRange"
            name="slider"
            step="10"
            value={moodInput}
            onChange={onMoodInputChange}
          />
          {/* <input
              type="number"
              min="1"
              max="100"
              id="amount"
              name="amount"
              step="10"
              value={moodInput}
              onchange={onMoodInputChange}
            /> */}
        </label>
      </div>
      <ButtonNextQuestion />
    </form>
  );
};

export default FourthQuestion;
