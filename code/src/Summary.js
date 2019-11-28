import React from "react";

export const Summary = props => {
  return (
    <div className="summary">
      <h4>
        Thank you {props.name} for your time and participation in our survey!
      </h4>
      <h4>Are you satified? You answer was {props.quality} </h4>
      <h4>You visit our place {props.time} </h4>
      <h4>
        And here some of your experience and ideas for us: {props.experience}
      </h4>
    </div>
  );
};
