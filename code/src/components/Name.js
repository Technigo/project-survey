import React from "react";

import Arrows from "components/Arrows";
import Progress from "./Progress";

const Name = ({
  name,
  setName,
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
          <label className="top-label">
            <div className="ask-a-question">
              <span className="question-indicator">{question}</span>
              <h1 className="question-text">Your name and surname</h1>
            </div>
            <input
              className="input"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
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

export default Name;
