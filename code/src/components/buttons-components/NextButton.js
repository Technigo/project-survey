import React from "react";

const NextButton = (props) => {
  const { onStepChange } = props;
  return (
    <>
      <button className="next-btn" onClick={onStepChange}>
        Next
      </button>
      
    </>
  );
};
export default NextButton;
