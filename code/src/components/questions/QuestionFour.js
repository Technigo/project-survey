import React from "react";

export const QuestionFour = ({ quality, onQualityChange }) => {
  const handleSelectChange = (e) => {
    onQualityChange(e.target.value);
  };

  return (
    <form>
      <h1 className="questions-main-heading">Quality</h1>
      <select name="quality" id="quality" value={quality} onChange={handleSelectChange}>
        <option defaultValue={"Prefer not to answer"}>Select most suitable answer</option>
        <option value={"Awesome"}>Awesome</option>
        <option value={"Overall decent"}>Overall decent</option>
        <option value={"Good"}>Good</option>
        <option value={"Acceptable"}>Acceptable</option>
        <option value={"Need for improvement"}>Need for improvement</option>
      </select>
    </form>
  );
};
