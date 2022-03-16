import React from "react";

export const Summary = ({ name, location, wantNewsletter, ageGroup }) => {
  return (
    <div className="form-container">
      <h2>Summary:</h2>
      <p>Name: {name}</p>
      <p>Location: {location}</p>
      <p>Newsletter: {wantNewsletter}</p>
      <p>Age: {ageGroup}</p>
    </div>
  )
}