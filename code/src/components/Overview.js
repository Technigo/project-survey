import React from "react";
import "./Overview.css";

const Overview = ({ nameInput, surnameInput, ageGroup, believesInput }) => {
  return (
    <section className="summary-container">
      <h2 className="summary-header">Summary</h2>
      <div className="summary-text">
        <p>Name: {nameInput}</p>
        <p>Surname: {surnameInput}</p>
        <p>Age: {ageGroup}</p>
        <p>Do you believe there's life on another planet? {believesInput}</p>
      </div>
    </section>
  );
};

export default Overview;
