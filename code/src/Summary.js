import React from "react";

export const Summary = props => {
  return (
    <div className="summary">
      <h3>
        Thank you {props.name} for your time and participation in our survey!
      </h3>
      <p>Are you satified? You answer was {props.quality} </p>
      <p>You visit our place {props.time} </p>
      <p>
        And here some of your experience and ideas for us: {props.experience}
      </p>
    </div>
  );
};
