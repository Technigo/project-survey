import React from "react";

export const InputType = (props) => {
  return (
    <div className="each-question">
      <select onChange={props.onTypeChange}>
        <option value="">
          Select what type of housing you're looking for:
        </option>
        <option value="apartment">Apartment</option>
        <option value="house">House</option>
        <option value="summer-house">Summer House</option>
      </select>
      <button type="submit" className="button">
        Submit
      </button>
    </div>
  );
};
