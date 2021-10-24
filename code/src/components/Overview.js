import React from "react";
import "./overview.css";

const Overview = ({ nameInput, surnameInput, ageInput, locationInput }) => {
  return (
    <section className="overview-container">
      <h2 className="overview-heading">About me</h2>
      <div className="overview-box">
        <p className="overview-text">
          My name is {nameInput} {surnameInput}{" "}
        </p>
        <p className="overview-text">I'm {ageInput} years old</p>
        <p className="overview-text">I live in {locationInput}</p>
      </div>
    </section>
  );
};

export default Overview;
