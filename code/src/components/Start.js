import React from "react";

import "../css/start.css";

const Start = ({ onStepChange }) => {
  return (
    <section className="form-wrapper">
      <form className="main-form">
        <h1>Exit Ticket</h1>
        <p>
          Please take a few minutes to reflect on today's class!
          <span role="img" aria-label="woman teacher">
            {" "}
            👩🏼‍🏫
          </span>
        </p>
        <button className="start-button" onClick={onStepChange}>
          Start here
        </button>
      </form>
    </section>
  );
};

export default Start;
