import React from "react";

export const Summary = props => {
  return (
    <div className="SummaryStyle">
      <p>
        Hello {props.name} you are {props.size} people in {props.location}{" "}
      </p>
    </div>
  );
};
