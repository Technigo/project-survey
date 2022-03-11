import React from "react";

const OverviewButton = (props) => {
  const { onStepChange } = props;
  return (
    <>
      <button className="overview-btn" onClick={onStepChange}>
        See overview
      </button>
      
    </>
  );
};
export default OverviewButton;
