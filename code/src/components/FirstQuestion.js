import React from "react";
import Header from "./Header";

export const FirstQuestion = ({
  nameInput,
  onNameInputChange,
  onStepChange,
}) => {
  return (
    <div>
      <Header />
      <div className="page-wrapper">
        <img
          src="https://www.ehandel.se/wp-content/uploads/2020/10/citymail_fossilfritt.jpg"
          alt="Citymail bil"
          className="side-picture"
        />
        <form onSubmit={onStepChange} className="content-container">
          <h2>Vem är du?</h2>
          <label htmlFor="nameInput" className="input-label-container">
            För och efternamn:
            <input
              id="nameInput"
              type="text"
              value={nameInput}
              onChange={onNameInputChange}
              className="input-field"
            />
          </label>
          <button>Nästa</button>
        </form>
      </div>
    </div>
  );
};

export default FirstQuestion;
