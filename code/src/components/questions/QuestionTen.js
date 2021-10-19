import React, { useState } from "react";

export const QuestionTen = ({ percent }) => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  console.log("nameInput", nameInput);
  console.log("emailInput", emailInput);

  return (
    <form>
      <h1>Thank you for your feedback!</h1>
      <h2>Would you like {percent}% off your next purchase?</h2>
      <label htmlFor="nameInput">
        Name:
        <input
          type="text"
          value={nameInput}
          name="nameInput"
          id="nameInput"
          onChange={(event) => setNameInput(event.target.value)}
          placeholder="Jane Frost"
          // pattern="[a-zA-Z ]{1-32}"
          // oninvalid="setCustomValidity('Please enter alphabets only.')"
          required
        />
      </label>
      <label htmlFor="emailInput">
        Contact email:
        <input
          type="email"
          value={emailInput}
          name="emailInput"
          id="emailInput"
          onChange={(event) => setEmailInput(event.target.value)}
          // placeholder="your_email@gmail.com"
          // oninvalid="setCustomValidity('Please enter valid email.')"
          required
        />
      </label>
    </form>
  );
};

// https://stackoverflow.com/questions/41296668/reactjs-form-input-validation
