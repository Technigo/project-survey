import React from "react";

export const QuestionTen = ({ percent, name, email, onNameChange, onEmailChange, nameInvalid, emailInvalid }) => {
  return (
    <form className="select-container">
      <div>
        <h1 className="questions-main-heading  ">
          Would you like <span className="highlight">{percent}%</span> off your next purchase?
        </h1>
      </div>
      <div className="client-details-wrapper">
        <label className="instructions" htmlFor="nameInput">
          Name:
          <input
            className="custom-input"
            type="text"
            value={name}
            name="nameInput"
            id="nameInput"
            onChange={(event) => onNameChange(event.target.value)}
            placeholder="Jane Frost"
            required
          />
          {nameInvalid && <span className="validations">Required field: alphabets only</span>}
        </label>
      </div>
      <div className="client-details-wrapper">
        <label className="instructions" htmlFor="emailInput">
          Email:
          <input
            className="custom-input"
            type="email"
            value={email}
            name="emailInput"
            id="emailInput"
            onChange={(event) => onEmailChange(event.target.value)}
            required
            placeholder="yourEmail@gmail.com"
          />
          {emailInvalid && <span className="validations">Required field: should include '@'.</span>}
        </label>
      </div>
    </form>
  );
};
