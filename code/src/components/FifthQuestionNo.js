import React from "react";

export const FifthQuestionNo = ({
  nameInput,
  onStepChange,
  satisfactionTextInput,
  onSatisfactionTextInputChange,
}) => {
  return (
    <form onSubmit={onStepChange}>
      <div>
        <h2>{nameInput}, tråkigt att du inte är nöjd med din postutdelning.</h2>
        <p>
          Vi vill alltid förbättra oss på Citymail. Förklara konkreta
          situationer där du varit missnöjd!
        </p>
        <label htmlFor="satisfactionInput">
          Förklara
          <textarea
            id="satisfactionInput"
            type="text"
            value={satisfactionTextInput}
            onChange={onSatisfactionTextInputChange}
          />
        </label>
      </div>
      <button type="submit">Skicka</button>
    </form>
  );
};

export default FifthQuestionNo;
