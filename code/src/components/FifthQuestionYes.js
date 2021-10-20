import React from "react";

export const FifthQuestionYes = ({
  nameInput,
  onStepChange,
  satisfactionTextInput,
  onSatisfactionTextInputChange,
}) => {
  return (
    <form onSubmit={onStepChange}>
      <div>
        <h2>{nameInput}, kul att du är nöjd med din postutdelning.</h2>
        <p>
          Vi vill alltid förbättra oss på Citymail. Beskriv gärna konkreta
          situationer där du varit nöjd!
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

export default FifthQuestionYes;
