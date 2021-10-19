import React from "react";

import Arrows from "./Arrows";
import Progress from "./Progress";

const Selector = ({
  experience,
  setExperience,
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
          <div className="selector">
            <label className="top-label" htmlFor="selector">
              <div className="ask-a-question">
                <span className="question-indicator">{question}</span>
                <h1 className="question-text">Experience in VR</h1>
              </div>
            </label>
            <select
              className="input"
              id="selector"
              onChange={(event) => setExperience(event.target.value)}
              value={experience}
              required
            >
              <option value="">Please select</option>
              <option value="first time">First Time</option>
              <option value="very little">Very little</option>
              <option value="few times">Used it a few times</option>
              <option value="frequent">Use it frequently</option>
              <option value="experienced">Experienced</option>
              <option value="developer">VR developer</option>
            </select>
          </div>
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

export default Selector;
