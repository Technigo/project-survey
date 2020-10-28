import React from "react";
import Button  from "./Button";

const FirstQuestion = ({
  userYearOfBirth,
  onYearOfBirthChange,
  section,
  setSection,
  
}) => {
  return (
    <section className="question-section">
      <h2 className="question-header">Vilket år föddes du?</h2>
      <label htmlFor="yearOfBirth">Ditt födelseår</label>
      <input
        value={userYearOfBirth}
        onChange={onYearOfBirthChange}
        id="yearOfBirth"
        type="number"
        min="1900"
        max="2020"
        placeholder="År"
        required
      />
      <Button
        nextQuestion="secondQuestion"
        currentState={userYearOfBirth}
        defaultState=""
        section={section}
        setSection={setSection}
      >
      </Button>
    </section>
  );
};

export default FirstQuestion;
