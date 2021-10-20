import React from "react";

export const SecondQuestion = ({
  adressInput,
  onAdressInputChange,
  onStepChange,
}) => {
  return (
    <form onSubmit={onStepChange}>
      <div>
        <h2>Var bor du?</h2>
        <label htmlFor="adressInput">
          Adress:
          <input
            id="adressInput"
            type="text"
            value={adressInput}
            onChange={onAdressInputChange}
          />
        </label>
      </div>
      <button type="submit">Nästa</button>
    </form>
  );
};

export default SecondQuestion;
