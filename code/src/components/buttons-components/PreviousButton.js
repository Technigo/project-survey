import React from "react";

const PreviousButton = (props) => {
  const { onStepChangeMinus } = props;
  return (
    <>
      <button className="overview-btn" onClick={onStepChangeMinus}>
        Previous
      </button>
      
    </>
  );
};
export default PreviousButton;
