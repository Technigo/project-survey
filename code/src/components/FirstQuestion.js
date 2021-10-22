import React from "react";

const FirstQuestion = ({
  nameInput,
  onNameInputChange,
  onStepChange,
  prevent,
}) => {
  return (
    <form onSubmit={prevent}>
      <h2>Your name and surname please!</h2>
      <label className="name-label" htmlFor="nameInput" onSubmit={prevent}>
        Names:
        <input
          className="input-padidng"
          className="name-input"
          name="nameInput"
          id="nameInput"
          type="text"
          value={nameInput}
          onChange={onNameInputChange}
        ></input>
      </label>
      <input
        className="button"
        disabled={nameInput === ""}
        type="submit"
        onClick={onStepChange}
      />
    </form>
  );
};
export default FirstQuestion;
