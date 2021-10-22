import React from "react";
import ButtonNextQuestion from "./ButtonNextPage";
import "./FourthQuestion.css";

const FourthQuestion = ({ moodInput, onMoodInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="page-header">Mood checker</h2>
      <p>Which picture represent the feeling you have for JavaScript?</p>
      <div className="slidecontainer">
        <label className="slide-label" htmlFor="slider">
          <input
            type="range"
            min="-100"
            max="100"
            className="slider"
            id="myRange"
            name="slider"
            step="100"
            value={moodInput}
            onChange={onMoodInputChange}
          />

          <input
            type="number"
            min="-100"
            max="100"
            id="amount"
            name="amount"
            step="50"
            value={moodInput}
            onchange={onMoodInputChange}
          />
        </label>
      </div>
      <div className="img-container-q4">
        <img
          className="img-mood"
          src="./img/horse.jpg"
          alt="horse making funny face"
        ></img>
        <img className="img-mood" src="./img/empty.jpg" alt="empty"></img>
        <img className="img-mood" src="./img/power.jpg" alt="fist in sky"></img>
      </div>
      <ButtonNextQuestion />
    </form>
  );
};

export default FourthQuestion;
