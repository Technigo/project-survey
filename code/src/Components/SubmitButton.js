import React from "react";

const SubmitButton = ({ disabled }) => {
  return (
    <>
      <button
        type="submit"
        value="Submit"
        disabled={disabled}
        className="submit-button"
      >
        Submit
      </button>
    </>
  );
};

export default SubmitButton;
