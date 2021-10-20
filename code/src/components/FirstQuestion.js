import React from "react";
import Header from "./Header";

export const FirstQuestion = ({
  nameInput,
  onNameInputChange,
  onStepChange,
}) => {
  return (
    <div>
      <Header />
      <form onSubmit={onStepChange} className="content-container">
        <h2>Vem är du?</h2>
        <label htmlFor="nameInput" className="input-label-container">
          För och efternamn:
          <input
            id="nameInput"
            type="text"
            value={nameInput}
            onChange={onNameInputChange}
            className="input-field"
          />
        </label>
        <button disabled={nameInput === ""}>Nästa</button>
      </form>
    </div>
  );
};

export default FirstQuestion;
