import React from "react";

export const Summary = (props) => {
  return (
    <div className="summary-container">
      {props.type}
      {props.room}
      {props.subway}
      {props.price}
      {props.additional}
    </div>
  );
};
