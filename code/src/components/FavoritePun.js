import React from "react";

const FavoritePun = ({ firstPunInput, handlePunInputChange, onStepChange }) => {
  return (
    <>
      <section>
        <form>
          <label htmlFor="punInput">Favorite pun</label>
          <input
            required
            id="punInput"
            type="text"
            placeholder="place pun here"
            name="pun"
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
