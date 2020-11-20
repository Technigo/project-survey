import React from "react";

const SecondQuestion = ({ userGender, onGenderChange }) => {
  return (
    <section className="question-section">
      <h2 className="question-heading">Vilket kön tillhör du?</h2>
      <select value={userGender} onChange={(e) => onGenderChange(e)} required>
        <option value="">Välj</option>
        <option value="kvinna">Kvinna</option>
        <option value="man">Man</option>
        <option value="annat">Annat</option>
      </select>
    </section>
  );
};

export default SecondQuestion;
