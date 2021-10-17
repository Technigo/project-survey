import React from "react";

const COLORS = ["white", "red", "black", "blue"];

const OptionsForm = () => {
  return (
    <form>
      <h2>select colors MAP</h2>
      <select>
        <label>select color</label>
        <option value="">Select color</option>
        {/* this creates a map that iterates over all of the colors in the const
        COLORS - name of map = c, we then assign the value of "key" to the array
        and shows the values of the array inside the option with the c */}
        {COLORS.map(c => (
          <option key={c}>{c}</option>
        ))}
      </select>
    </form>
  );
};
export default OptionsForm;
