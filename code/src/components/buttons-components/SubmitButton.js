import React from "react";

const SubmitButton = (props) => {
  return (
    <button
      className="submit-btn"
      onClick={props.onStepChange}
    >
      Submit
    </button>
  );
};
export default SubmitButton;
