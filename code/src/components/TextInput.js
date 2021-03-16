import React, { useState } from "react";
import "./TextInput.css";

export const TextInput = (props) => {
  const [userInput, setUserInput] = useState("");
  return (
    <>
      {/*The class "user-input" gets an prop class which either is "active" (shows it) or 
    "inactive". These are specified in index.css*/}
      <div class={`text-input__answer ${props.activeClass}`}>
        <h3>Text:</h3>
        <p>{userInput}</p>
      </div>
      <div class="text-input__inner">
        <label for="userInput">
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
