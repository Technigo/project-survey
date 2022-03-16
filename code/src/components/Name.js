import React from "react";

const Name = ({ nameInput, NameInputChange, Change }) => {
  return (
    <form>
      <label htmlFor="nameInput">Enter your Name:</label>
      <input
        id="nameInput"
        type="text"
        value={nameInput}
        onChange={NameInputChange}
      />
      <button disabled={nameInput === ""} onClick={Change}>
        ➤
      </button>
    </form>
  );
};
export default Name;
