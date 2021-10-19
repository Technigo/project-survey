import React from "react";

const Summary = ({
  nameInput,
  punInput,
  dropdown,
  radioInput,
  ageRadioInput,
}) => {
  return (
    <section className="form-container">
      <h2 className="label-text">Here's your summary</h2>
      <div className="summary-container">
        <p>name: {nameInput}</p>
        <p> favorite short pun: {punInput}</p>
        <p> least favorit bird: {dropdown}</p>
        <p>can you lick your elbow? {radioInput}</p>
        <p>you feel this old: {ageRadioInput}</p>
        <form className="submit-button-form">
          <button className="submitBtn" type="submit">
            restart
          </button>
        </form>
      </div>
    </section>
  );
};

export default Summary;
