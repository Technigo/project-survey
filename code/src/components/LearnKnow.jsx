import React from 'react';

export const LearnKnow = ({ learnKnow, setLearnKnow }) => {
  return (
    <div className="survey-content-container">
      <h3 className="sub-heading q">What personal trait do you value the <span className="underline">most</span>?</h3>
      <div className="radio-container">
        <label className="radio-label" htmlFor="learn">
          <input
            type="radio"
            id="learn"
            name="learnKnow"
            value="is eager to learn"
            onChange={(event) => setLearnKnow(event.target.value)}
            checked={learnKnow === 'is eager to learn'} />
          Eager to learn
        </label>
        <label className="radio-label" htmlFor="know">
          <input
            type="radio"
            id="know"
            name="learnKnow"
            value="knows everything already"
            onChange={(event) => setLearnKnow(event.target.value)}
            checked={learnKnow === 'knows everything already'} />
          Knows everything already
        </label>
      </div>
    </div>
  );
};