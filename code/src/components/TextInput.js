import React from "react";

import "./TextInput.css";

export const TextInput = ({ userInput, setUserInput }) => {

  const handleChange = (e) => {
    setUserInput(e.target.value)
   }

  return (
      <form className="text-input" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="userInput">
          <h3>
            Please describe shortly what visions you have of the far future.
            Will we live on Mars? Or maybe there is hover cars!
          </h3>
        </label>
        <input
          id="userInput"
          type="text"
          value={userInput}
          onChange={handleChange}
          required
          placeholder="This field can not be left blank"
        ></input>
      </form>
  );
};
