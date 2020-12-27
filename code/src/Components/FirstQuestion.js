import React from "react";

import { InputStyle } from "../lib/InputStyle";

const FirstQuestion = ({
  userYearOfBirth,
  onYearOfBirthChange,
}) => {
  return (
    <div>
      <h2>Vilket år föddes du?</h2>
      <InputStyle
        value={userYearOfBirth}
        onChange={onYearOfBirthChange}
        id="yearOfBirth"
        type="number"
        min="1900"
        max="2020"
        placeholder="År"
        required
      />
    </div>
  );
};

export default FirstQuestion;
