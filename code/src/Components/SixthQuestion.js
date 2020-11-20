import React from "react";

const SixthQuestion = ({ userTextInput, onTextInputChange }) => {
  return (
    <article className="question-section">
      <h2 className="question-header">
        Har du några ytterligare synpunkter om aktiviteten?
      </h2>

      <label htmlFor="userTextInput">Skriv här:</label>
      <input
        value={userTextInput}
        onChange={(e) => onTextInputChange(e.target.value)}
        id="userTextInput"
        type="textarea"
        placeholder="Det var roligt att..."
      />
    </article>
  );
};

export default SixthQuestion;
