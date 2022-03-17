import React from "react";

export const Summary = ({ name, location, wantNewsletter, ageGroup }) => {
  return (
    <div className="summary">
      <h2>YOUR SUBMISSION</h2>
      <p>Name: {name}</p>
      <p>Closest office: {location}</p>
      <p>Already a member: {wantNewsletter}</p>
      <p>What brings you here: {ageGroup}</p>
      <h2>GOOD LUCK!</h2>
      <p>The association <span className="highlight"></span>Art Emergence lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum    </p>
    </div>
  )
}