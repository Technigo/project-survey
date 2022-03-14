import React from "react";

export const Summary = props => {
  return (
    <div className="form-container">
      <h2>Summary:</h2>
      <p>Name: {props.name}</p>
      <p>Location: {props.location}</p>
      <p>Newsletter: {props.wantNewsletter}</p>
      <p>Age: {props.ageGroup}</p>
    </div>
  )
}