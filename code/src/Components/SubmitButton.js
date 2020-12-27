import React from "react";
import { ButtonStyle } from "../lib/ButtonStyle";

const SubmitButton = ({ disabled }) => {
  return (
    <>
      <ButtonStyle
        type="submit"
        value="Submit"
        disabled={disabled}
        className="submit-button"
      >
        Submit
      </ButtonStyle>
    </>
  );
};

export default SubmitButton;
