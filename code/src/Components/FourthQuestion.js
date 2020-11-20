import React from "react";

const FourthQuestion = ({ userExpectation, onExpectationsChange }) => {
  return (
    <article className="question-section">
      <h2 className="question-header">
        Uppfyllde aktiviteten dina förväntningar?
      </h2>
      <div className="radio-buttons expectation">
        <label htmlFor="jajjemän">
          <input
            type="radio"
            name="expect"
            value="jajjemän"
            checked={userExpectation === "jajjemän"}
            onChange={onExpectationsChange}
            className="radio-button"
          />
          Jajjemän
        </label>
      </div>

      <div className="radio-buttons expectation">
        <label htmlFor="någotSåNär">
          <input
            type="radio"
            name="expect"
            value="någotSåNär"
            checked={userExpectation === "någotSåNär"}
            onChange={onExpectationsChange}
            className="radio-button"
          />
          Något så när
        </label>
      </div>

      <div className="radio-buttons expectation">
        <label htmlFor="vetInte">
          <input
            type="radio"
            name="expect"
            value="vetInte"
            checked={userExpectation === "vetInte"}
            onChange={onExpectationsChange}
            className="radio-button"
          />
          Har inte tänkt på det
        </label>
      </div>

      <div className="radio-buttons expectation">
        <label htmlFor="inteRiktigt">
          <input
            type="radio"
            name="expect"
            value="inteRiktigt"
            checked={userExpectation === "inteRiktigt"}
            onChange={onExpectationsChange}
            className="radio-button"
          />
          Inte riktigt
        </label>
      </div>

      <div className="radio-buttons expectation">
        <label htmlFor="inteAlls">
          <input
            type="radio"
            name="expect"
            value="inteAlls"
            checked={userExpectation === "inteAlls"}
            onChange={onExpectationsChange}
            className="radio-button"
          />
          Nej, inte alls.
        </label>
      </div>
    </article>
  );
};

export default FourthQuestion;
