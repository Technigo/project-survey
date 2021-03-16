import React from "react";
import "./TextInput.css";

export const TextInput = (props) => {
  const [userInput, setUserInput] = [props.userInput, props.setUserInput]
  return (
    <>
      <div className="text-input__inner">
        <label htmlFor="userInput">
          <h2>Question 0</h2>
        </label>
        <input
          id="userInput"
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        ></input>
      </div>
    </>
  );
};
