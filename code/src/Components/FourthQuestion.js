import React from "react";
import Button from "./Button.js";

const FourthQuestion = ({
  userExpectations,
  onExpectationsChange,
  section,
  setSection,
  printString,
  setPrintString,
}) => {
  return (
    <section className="question-section">
      <h2 className="question-header">
        Uppfyllde aktiviteten dina förväntningar?
      </h2>
      <div className="radio-buttons expectation">
        <label htmlFor="jajjemän">
          <input
            type="radio"
            name="expect"
            value="jajjemän"
            checked={userExpectations === "jajjemän"}
            onChange={onExpectationsChange}
            printString="jajjemän"
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
            checked={userExpectations === "någotSåNär"}
            onChange={onExpectationsChange}
            printString="något så när"
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
            checked={userExpectations === "vetInte"}
            onChange={onExpectationsChange}
            printString="vet inte"
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
            checked={userExpectations === "inteRiktigt"}
            onChange={onExpectationsChange}
            printString="inte riktigt"
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
            checked={userExpectations === "inteAlls"}
            onChange={onExpectationsChange}
            printString="inte alls"
            className="radio-button"
          />
          Nej, inte alls.
        </label>
      </div>
      <Button
        disable={onExpectationsChange}
        btnText="Nästa"
        nextQuestion="fifthQuestion"
        section={section}
        setSection={setSection}
        currentState={userExpectations}
        defaultState=""
      />
    </section>
  );
};

export default FourthQuestion;
