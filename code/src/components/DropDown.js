import React from "react";

const DropDown = ({ dropdown, handleBirdInput, onStepChange }) => {
  return (
    <form>
      <label>Least favorite bird</label>
      <select value={dropdown} onChange={handleBirdInput}>
        <option value="fiskmås">fiskmås</option>
        <option value="skata">skata</option>
        <option value="svan">svan</option>
        <option value="kanadagäss">kanadagäss</option>
      </select>

      <button onClick={onStepChange}>Show Summary</button>
    </form>
  );
};
export default DropDown;

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
