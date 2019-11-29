import React from "react";

export const Summary = props => (
  <div className="summary">
    <h1>Dear {props.name}!</h1>
    <p>
      Thank you for completing the survey! We'll do our best to find your
      pawfect match! Soon you can meet your {props.size} doggo that matches your
      {props.active} lifestyle.
    </p>
  </div>
);
