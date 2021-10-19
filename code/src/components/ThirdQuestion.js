import React from "react";
const ThirdQuestion = ({
  favouriteCandy,
  onFavouriteCandyInputChange,
  onStepChange,
}) => {
  return (
    <>
      <h2>Select your favourite Halloween candy</h2>
      <form>
        <select value={favouriteCandy} onChange={onFavouriteCandyInputChange}>
          <option value="">Select...</option>
          <option value="chocolade">Chocolad eyes😱</option>
          <option value="jelly">Jelly brain</option>
          <option value="candy">Hard candy</option>
        </select>
        <button onClick={onStepChange}>Next question</button>
      </form>
    </>
  );
};
export default ThirdQuestion;
