import React from "react";

const PreviousButton = (props) => {
  const { onStepChangeMinus } = props;
  return (
    <>
      <button className="previous-btn" onClick={onStepChangeMinus}>
        Previous
      </button>
      
    </>
  );
};
export default PreviousButton;
