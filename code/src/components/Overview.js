import React from "react";

const Overview = ({ nameInput, secretnameInput, themeInput, lifeInput }) => {
  return (
    <div className="question-container">
      <section>
        <h2>You are clearly a hero, here´s your results: </h2>
        <p>
          <span className="bold">Name :</span> {nameInput}
        </p>
        <p>
          <span className="bold">Hero Name :</span> {secretnameInput}
        </p>
        <p>
          <span className="bold">Theme Song :</span> {themeInput}
        </p>
        <p>
          <span className="bold">Lifes saved :</span> {lifeInput}
        </p>
      </section>
    </div>
  );
};

export default Overview;
