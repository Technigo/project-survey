import React, { useState } from "react";

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
        {nameInvalid && <span style={{ color: "red" }}>User name is required</span>}
      </label>
      <br />
      <label htmlFor="emailInput">
        Contact email:
        <input type="email" value={email} name="emailInput" id="emailInput" onChange={(event) => onEmailChange(event.target.value)} required />
        {emailInvalid && <span style={{ color: "red" }}>Email is required</span>}
      </label>
    </form>
  );
};

// https://stackoverflow.com/questions/41296668/reactjs-form-input-validation
