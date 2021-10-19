import React from "react";

const StartPage = ({ onStepChange }) => {
  return (
    <section className="start-page-container">
      <h1 className="description">survey</h1>
      <h2 className="first-page-header">Hello first page</h2>
      <a onClick={onStepChange}>
        <img className="button-icon" src="./img/chevron.png" alt=""></img>
      </a>
      {/* <button onClick={onStepChange}>Lets go</button> */}
    </section>
  );
};

export default StartPage;
