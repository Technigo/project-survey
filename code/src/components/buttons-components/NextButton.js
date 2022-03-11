import React from "react";

const NextButton = (props) => {
  const { onStepChange } = props;
  return (
    <>
      <button className="overview-btn" onClick={onStepChange}>
        Next
      </button>
      
    </>
  );
};
export default NextButton;
