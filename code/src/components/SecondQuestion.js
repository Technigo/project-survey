import React from "react";

export const SecondQuestion = ({
  adressInput,
  onAdressInputChange,
  onStepChange,
}) => {
  return (
    <form>
      <div>
        <label htmlFor="adressInput">Var bor du?</label>
        <input
          id="adressInput"
          type="text"
          value={adressInput}
          onChange={onAdressInputChange}
        />
      </div>
      <button onClick={onStepChange}>Nästa</button>
    </form>
  );
};

export default SecondQuestion;
