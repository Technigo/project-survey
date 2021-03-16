import React from "react";
import "./TextInput.css";

export const TextInput = (props) => {
  const {userInput, setUserInput} = props;
  
  return (
    <>
      <div className="text-input__inner">
        <label htmlFor="userInput">
          <h2>Please describe shortly what visions you have of the far future. Will we live on Mars? Or maybe there is hover cars!</h2>
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
