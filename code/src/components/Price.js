import React from "react";

const Price = ({
  priceInput,
  onPriceInputChange,
  onStepChange,
  onPreviousStepChange,
}) => {
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <form>
          <label htmlFor="priceInput">
            {" "}
            How much does it usually cost for a plate?
          </label>
          <div className="slider-wrapper">
            <span>100kr</span>
            <input
              id="priceInput"
              type="range"
              min="100"
              max="1000"
              value={priceInput}
              onChange={onPriceInputChange}
            />
            <span>1000kr</span>
          </div>
        </form>
      </div>
      <div className="button-wrapper">
        <button onClick={onPreviousStepChange}>Previous question</button>
        <button onClick={onStepChange}>Next question</button>
      </div>
    </div>
  );
};

export default Price;
