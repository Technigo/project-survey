import React from "react";

import "./button.css";

export const Button = ({ disable, btnText, section, setSection }) => {
  return (
    <button
      aria-label={
        section === "theEnd"
          ? "Hell yeah!"
          : "Click button to show next question."
      }
      type="submit"
      onClick={(event) => {
        setSection(event.target.value);
      }}
      value={section}
      className="submit-button"
      disabled={disable === ""}
    >
      {btnText}
    </button>
  );
};
