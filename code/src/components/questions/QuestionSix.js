import React, { useState } from "react";

export const QuestionSix = () => {
  const [option, optionsState] = useState("default");
  console.log(option);
  return (
    <form>
      <h1 className="questions-main-heading">Delivery Time</h1>
      <select value={option} onChange={(e) => optionsState(e.target.value)}>
        <option disabled value={"default"}>
          Select most suitable option
        </option>
        <option value={"Super fast"}>Super fast</option>
        <option value={"Overall decent"}>Overall decent</option>
        <option value={"Good"}>Good</option>
        <option value={"Acceptable"}>Acceptable</option>
        <option value={"Need for improvement"}>Need for improvement</option>
      </select>
    </form>
  );
};
