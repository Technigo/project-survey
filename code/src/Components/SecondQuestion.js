import React from "react";
import { SelectStyle } from "../lib/SelectStyle";

const SecondQuestion = ({ userGender, onGenderChange }) => {
  return (
    <section className="question-section">
      <h2 className="question-heading">Vilket kön tillhör du?</h2>
      <SelectStyle value={userGender} onChange={(e) => onGenderChange(e)} required>
        <option value="">Välj</option>
        <option value="kvinna">Kvinna</option>
        <option value="man">Man</option>
        <option value="annat">Annat</option>
      </SelectStyle>
    </section>
  );
};

export default SecondQuestion;
