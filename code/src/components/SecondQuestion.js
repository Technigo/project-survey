import React from "react";
import Header from "./Header";

export const SecondQuestion = ({
  adressInput,
  onAdressInputChange,
  onStepChange,
}) => {
  return (
    <>
      <Header />
      <form onSubmit={onStepChange} className="content-container">
        <div>
          <h2>Var bor du?</h2>
          <label htmlFor="adressInput" className="input-label-container">
            Adress:
            <input
              id="adressInput"
              type="text"
              value={adressInput}
              onChange={onAdressInputChange}
              className="input-field"
            />
          </label>
        </div>
        <button type="submit">Nästa</button>
      </form>
    </>
  );
};

export default SecondQuestion;
