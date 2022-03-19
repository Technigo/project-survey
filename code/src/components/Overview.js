import React from "react";

const Overview = ({
  nameInput,
  goals,
  relateToImg,
  handInTime,
  graduation,
}) => {
  return (
    <section>
      <h2>My values from form: </h2>
      <p>Name: {nameInput}</p>
      <p>
        The requirement level you are trying to reach each week:
        {goals}
      </p>
      <p>The image you relate to the most is: {relateToImg}</p>
      <p>You hand in your project: {handInTime}</p>
      <p> When you graduate you are going to feel: {graduation}</p>
    </section>
  );
};

export default Overview;
