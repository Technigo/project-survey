import React from "react";

export const Summary = props => {
  return (
    <div className="summary">
      <h2>Hey stranger!</h2>
      <h4>Welcome to the superhero starfleet!</h4>
      <p>
        You go by - {props.name}
        <br></br>
        Your awsome superpower is - {props.superPower}
        <br></br>
        About Sidekicks - {props.sideKick}
        <br></br>
        In what team do you play - {props.range}
        <br></br>
      </p>
    </div>
  );
};
