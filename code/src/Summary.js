import React from "react";

export const Summary = props => {
  const { name, time, quality, experience } = props;
  return (
    <div className="summary">
      <p>Thank you {name} for participation in our survey!</p>
      <p>Are you satified? Your answer was {quality} </p>
      <p>You visit our place {time} </p>
      <p>And here are some ideas for us: {experience}</p>
    </div>
  );
};
