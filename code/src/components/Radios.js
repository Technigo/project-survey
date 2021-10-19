import React from "react";

import Arrows from "./Arrows";
import Progress from "./Progress";

const Radios = ({
  theatreVisits,
  setTheatreVisits,
  question,
  setQuestion,
  progress,
  setProgress,
}) => {
  return (
    <div className="hero-image">
      <div className="content-wrapper">
        <form
          className="form"
          onSubmit={(event) => {
            event.preventDefault();
            setQuestion(question + 1);
            setProgress(progress + 1);
          }}
        >
          <div className="ask-a-question">
            <span className="question-indicator">{question}</span>
            <h1 className="question-text"> How often you go to theatre?</h1>
          </div>
          <label>
            <input
              type="radio"
              value="less than once a year"
              onChange={(event) => setTheatreVisits(event.target.value)}
              checked={theatreVisits === "less than once a year"}
            />
            Less than once a year
          </label>
          <label>
            <input
              type="radio"
              value="once or twice a year"
              onChange={(event) => setTheatreVisits(event.target.value)}
              checked={theatreVisits === "once or twice a year"}
            />
            Once of twice a year
          </label>
          <label>
            <input
              type="radio"
              value="3 - 5 times a year"
              onChange={(event) => setTheatreVisits(event.target.value)}
              checked={theatreVisits === "3 - 5 times a year"}
            />
            3 - 5 time a year
          </label>
          <label>
            <input
              type="radio"
              value="more than 5 times a year"
              onChange={(event) => setTheatreVisits(event.target.value)}
              checked={theatreVisits === "more than 5 times a year"}
            />
            more than 5 times a year
          </label>
          <button className="next-question" type="submit">
            OK
          </button>
        </form>
        <Arrows question={question} setQuestion={setQuestion} />
        <Progress progress={progress} />
      </div>
    </div>
  );
};

export default Radios;
