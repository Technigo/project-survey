import React from "react";

import Arrows from "./Arrows";
import Progress from "./Progress";
import RatingScale from "./RatingScale";

const arr = Array.from({ length: 10 }, (_, i) => i + 1);

const Rating = ({
  rating,
  setRating,
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
            <h1 className="question-text">Please rate the VR show</h1>
          </div>
          <div className="rating-number-wrapper">
            {arr.map((number) => (
              <RatingScale
                hey={number}
                number={number}
                rating={rating}
                setRating={setRating}
              />
            ))}
          </div>
        </form>
        <Arrows question={question} setQuestion={setQuestion} />
        <Progress progress={progress} />
      </div>
    </div>
  );
};

export default Rating;
