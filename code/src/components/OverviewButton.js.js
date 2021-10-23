import React from "react";

const OverviewButton = (props) => {
  const { onStepChange, onStepChangeMinus } = props;
  return (
    <>
      <button className="overview-btn" onClick={onStepChange}>
        See overview
      </button>
      <button
        className="previous-btn overview-page-btn"
        onClick={onStepChangeMinus}
      >
        Previous
      </button>
    </>
  );
};
export default OverviewButton;
