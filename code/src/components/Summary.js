import React from "react";

export const Summary = (props) => {
  return (
    <div className="summary-container">
      <p className="summary-text">
        You have chosen to look for a {props.type} with {props.room} rooms. The
        rent should be between {props.price} and you have added the following
        information:
        {props.additional}
      </p>
    </div>
  );
};
