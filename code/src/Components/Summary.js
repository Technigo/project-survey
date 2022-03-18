import React from "react";

export const Summary = ({ name, membership, location, occupationGroup, email }) => {
  return (
    <div className="summary">
      <h2>YOUR SUBMISSION</h2>
      <p>Name: {name}</p>
      <p>Already a member: {membership}</p>
      <p>Closest office: {location}</p>
      <p>What brings you here: {occupationGroup}</p>
      <p>Email: {email}</p>
      <p>We will contact you if you are the <span className="highlight">lucky winner!</span></p>
    </div>
  )
}