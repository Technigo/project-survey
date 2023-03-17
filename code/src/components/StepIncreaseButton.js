/* eslint-disable max-len */
import React from 'react';
/* the StepIncreaseButton component is defined using the const keyword. This component takes a prop called handleStepIncrease, which is a function that will be called when the button is clicked. The component returns a button element with an onClick event handler that calls the handleStepIncrease function. */
const StepIncreaseButton = ({ handleStepIncrease }) => {
  return (
    <button className="stepButton" type="button" onClick={handleStepIncrease}>Next step</button>
  );
}

export default StepIncreaseButton;
