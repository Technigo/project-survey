import React from "react";
import "./Overview.css";

const Overview = ({
  nameInput,
  surnameInput,
  ageGroup,
  experienceInput,
  believesInput,
}) => {
  return (
    <section className="summary-container">
      <h2 className="summary-header">Summary</h2>
      <div className="summary-text">
        <p>Name: {nameInput}</p>
        <p>Surname: {surnameInput}</p>
        <p>Age: {ageGroup}</p>
        <p>
          Do you believe that life exists outside of this planet?{" "}
          {experienceInput}%
        </p>
        <p>
          Have you ever experienced something out of this world? {believesInput}
        </p>
      </div>
    </section>
  );
};

export default Overview;
