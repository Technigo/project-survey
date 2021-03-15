import React, { useState } from "react";
import "./TextInput.css";

export const TextInput = (props) => {
  const [userInput, setUserInput] = useState("");
  return (
    <>
      <div class={`user-input ${props.class}`} ><h3>Text:</h3> <p>{userInput}</p></div>
      <div class="text">
        <h2>Question 0</h2>
        <input
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        ></input>
      </div>
    </>
  );
};
