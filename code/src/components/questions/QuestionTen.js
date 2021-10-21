import React from "react";

export const QuestionTen = ({ percent, name, email, onNameChange, onEmailChange, nameInvalid, emailInvalid }) => {
  return (
    <form>
      <div>
        <h1 className="questions-main-heading">Thank you for your feedback!</h1>
        <h2 className="instructions">Would you like {percent}% off your next purchase?</h2>
      </div>
      <label htmlFor="nameInput">
        Name:
        <input
          type="text"
          value={name}
          name="nameInput"
          id="nameInput"
          onChange={(event) => onNameChange(event.target.value)}
          placeholder="Jane Frost"
          required
        />
        {nameInvalid && <span style={{ color: "red" }}>Required field: alphabets only</span>}
      </label>
      <br />
      <label htmlFor="emailInput">
        Contact email:
        <input
          type="email"
          value={email}
          name="emailInput"
          id="emailInput"
          onChange={(event) => onEmailChange(event.target.value)}
          required
          placeholder="yourEmail@gmail.com"
        />
        {emailInvalid && <span style={{ color: "red" }}>Required field: should include '@'. </span>}
      </label>
    </form>
  );
};
