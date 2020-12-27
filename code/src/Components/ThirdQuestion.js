import React from "react";

import { QuestionHeader } from "../lib/FormStyle"
import { CheckboxWrapper, CheckboxLabel, CheckboxStyle } from "../lib/CheckboxStyle";

const ThirdQuestion = ({ userActivity, onActivityChange }) => {
  return (
    <div>
      <QuestionHeader>Vilken aktivitet har du deltagit i?</QuestionHeader>
        <CheckboxWrapper>
          <CheckboxLabel htmlFor="coaching">Måltidscoachning</CheckboxLabel>
          <CheckboxStyle
            id="coaching"
            type="checkbox"
            checked={userActivity.includes("måltidscoaching")}
            onChange={() => onActivityChange("måltidscoaching")}
          />
          <CheckboxLabel htmlFor="telefonfika">Telefonfika</CheckboxLabel>
          <CheckboxStyle
            id="telefonfika"
            type="checkbox"
            checked={userActivity.includes("fika")}
            onChange={() => onActivityChange("fika")}
          />
          <CheckboxLabel htmlFor="course">Digital kurs</CheckboxLabel>
          <CheckboxStyle
            id="course"
            type="checkbox"
            checked={userActivity.includes("digital kurs")}
            onChange={() => onActivityChange("digital kurs")}
          />
          <CheckboxLabel htmlFor="coachTalk">Råd av en coach</CheckboxLabel>
          <CheckboxStyle
            id="coachTalk"
            type="checkbox"
            checked={userActivity.includes("råd av coach")}
            onChange={() => onActivityChange("råd av coach")}
          />
        </CheckboxWrapper>
    </div>
  );
};

export default ThirdQuestion;
