import React from "react";

const FavoritePun = ({ firstPunInput, handlePunInputChange, onStepChange }) => {
  return (
    <>
      <section className="form-container">
        <form>
          <label className="label-text" htmlFor="punInput">
            Last song you listened to?
          </label>
          <input
            className="input-field"
            required
            id="songInput"
            type="text"
            placeholder="enter song here"
            name="song"
            value={firstPunInput}
            onChange={handlePunInputChange}
          />
          <button onClick={onStepChange}>Next Question</button>
        </form>
      </section>
    </>
  );
};

export default FavoritePun;
