import React, { useState } from "react";

export const QuestionFour = () => {
  const [option, optionsState] = useState("default");
  return (
    <div>
      <h1>Quality</h1>
      <select value={option} onChange={(e) => optionsState(e.target.value)}>
        <option disabled value={"default"}>
          Select most suitable option
        </option>
        <option value={"awesome"}>Awesome</option>
        <option value={"decent"}>Overall decent</option>
        <option value={"good"}>Good</option>
        <option value={"acceptable"}>Acceptable</option>
        <option value={"need for improvement"}>Need for improvement</option>
      </select>
    </div>
  );
};
