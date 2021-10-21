import React from "react";
import ButtonNextQuestion from "./ButtonNextPage";
import "./FourthQuestion.css";

const FourthQuestion = ({ moodInput, onMoodInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="page-header">Mood checker</h2>
      <div className="slidecontainer">
        <label htmlFor="slider">
          <p>Which picture represent the feeling you have for JavaScript?</p>
          <input
            type="range"
            min="0"
            max="100"
            className="slider"
            id="myRange"
            name="slider"
            step="50"
            value={moodInput}
            onChange={onMoodInputChange}
          />

          {/* <input
            type="number"
            min="0"
            max="100"
            id="amount"
            name="amount"
            step="50"
            value={moodInput}
            onchange={onMoodInputChange}
          /> */}
        </label>
        <div className="img-container-q4">
          <img className="img-mood" src="./img/horse.jpg" alt="arrow"></img>
          <img className="img-mood" src="./img/empty.jpg" alt="arrow"></img>
          <img className="img-mood" src="./img/power.jpg" alt="arrow"></img>
        </div>
      </div>
      <ButtonNextQuestion />
    </form>
  );
};

export default FourthQuestion;
