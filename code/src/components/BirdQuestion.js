import React from "react";

const BirdQuestion = ({ birdInput, handleBirdInputChange, onStepChange }) => {
  return (
    <form className="form-container" tabIndex="0">
      <label className="label-text">
        Least favorite bird
        <span role="img" aria-label="bird emoji">
          🐦
        </span>
      </label>
      <select value={birdInput} onChange={handleBirdInputChange}>
        <option className="select-default" value="pick bird">
          PICK BIRD HERE
        </option>
        <option value="fiskmås">fiskmås</option>
        <option value="skata">skata</option>
        <option value="svan">svan</option>
        <option value="kanadagås">kanadagås</option>
      </select>

      <button onClick={onStepChange}>Next question</button>
    </form>
  );
};
export default BirdQuestion;

/* <form>
      <h2>select colors MAP</h2>
      <select>
        <label>select color</label>
        <option value="">Select color</option>
        {/* this creates a map that iterates over all of the colors in the const
        COLORS - name of map = c, we then assign the value of "key" to the array
        and shows the values of the array inside the option with the c */
//   {COLORS.map(c => (
//    <option key={c} value={c}>
//      {c}
//    </option>
//   ))}
//  </select>
/*
      <button onClick={onStepChange}>Show Summary</button>
    </form>  */
