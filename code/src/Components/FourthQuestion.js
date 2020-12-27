import React from "react";
import { QuestionHeader } from "../lib/FormStyle";
import { RadiobuttonWrapper, RadiobuttonLabel, RadiobuttonInput } from "../lib/RadiobuttonStyle";

const FourthQuestion = ({ userExpectation, onExpectationsChange }) => {
  return (
    <div>
      <QuestionHeader>
        Uppfyllde aktiviteten dina förväntningar?
      </QuestionHeader>
      <RadiobuttonWrapper>
        <RadiobuttonLabel htmlFor="jajjemän">
          <RadiobuttonInput
            type="radio"
            name="expect"
            value="jajjemän"
            checked={userExpectation === "jajjemän"}
            onChange={onExpectationsChange}
            className="radio-button"
          />
          Jajjemän
        </RadiobuttonLabel>

        <RadiobuttonLabel htmlFor="något så när">
          <RadiobuttonInput
            type="radio"
            name="expect"
            value="något så när"
            checked={userExpectation === "någotSåNär"}
            onChange={onExpectationsChange}
            className="radio-button"
          />
          Något så när
        </RadiobuttonLabel>

        <RadiobuttonLabel htmlFor="kanske">
          <RadiobuttonInput
            type="radio"
            name="expect"
            value="kanske"
            checked={userExpectation === "kanske"}
            onChange={onExpectationsChange}
            className="radio-button"
          />
          Har inte tänkt på det
        </RadiobuttonLabel>

        <RadiobuttonLabel htmlFor="inte rktigt">
          <RadiobuttonInput
            type="radio"
            name="expect"
            value="inte riktigt"
            checked={userExpectation === "inte riktigt"}
            onChange={onExpectationsChange}
            className="radio-button"
          />
          Inte riktigt
        </RadiobuttonLabel>

        <RadiobuttonLabel htmlFor="inte alls">
          <RadiobuttonInput
            type="radio"
            name="expect"
            value="inte alls"
            checked={userExpectation === "inte alls"}
            onChange={onExpectationsChange}
            className="radio-button"
          />
          Nej, inte alls.
        </RadiobuttonLabel>
        </RadiobuttonWrapper>
    </div>
  );
};

export default FourthQuestion;
