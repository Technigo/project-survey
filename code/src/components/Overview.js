import React from "react";

const Overview = ({
  nameInput,
  goals,
  relateToImg,
  handInTime,
  graduation,
  radioValue,
  setRadioValue,
}) => {
  return (
    <section className="form-container">
      <h2>
        Alright {nameInput}, here is your answers to what kind of code student
        you are!
      </h2>
      <p>The requirement level you are trying to reach each week: {goals}</p>
      <p>
        The image you relate to the most is:{" "}
        <img src={radioValue} alt={radioValue} />
      </p>
      <p>You hand in your project: {handInTime}</p>
      <p> When you graduate you are going to feel: {graduation}</p>
    </section>
  );
};

export default Overview;
