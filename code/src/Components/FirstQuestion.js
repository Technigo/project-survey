import React from "react";

const FirstQuestion = ({
  userYearOfBirth,
  onYearOfBirthChange,
}) => {
  return (
    <article className="question-section">
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
    </article>
  );
};

export default FirstQuestion;
