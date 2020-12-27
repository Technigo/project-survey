import React from "react";
import { QuestionHeader } from "../lib/FormStyle";
import { TextareaStyle } from "../lib/InputStyle";

const SixthQuestion = ({ userTextInput, onTextInputChange }) => {
  return (
    <div>
      <QuestionHeader>
        Har du några ytterligare synpunkter om aktiviteten?
      </QuestionHeader >

      <TextareaStyle
        value={userTextInput}
        onChange={(e) => onTextInputChange(e.target.value)}
        id="userTextInput"
        type="textarea"
        placeholder="Det var roligt att..."
      />
    </div>
  );
};

export default SixthQuestion;
