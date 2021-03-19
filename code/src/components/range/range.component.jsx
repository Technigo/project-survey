import React, { useState } from "react";

import {
  ButtonContainer,
  ButtonText,
  ButtonsContainer
} from "../../assets/styles/shared";

const Range = () => {
  const [range, setRange] = useState(
    localStorage.getItem("Range") || "50"
  );

  const onRangeChange = (e) => {
    setRange(e.target.value);
  };

  const onNextHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("Range", range);
  };

  return (
    <>
      <div>
        <progress value={range} max="100" id="progress" />
      </div>
      <div>
        <input type="range" min="0" max="100" onChange={onRangeChange} />
      </div>
      <ButtonsContainer>
        <ButtonContainer type="submit">
          <ButtonText to="/step-3">Previous</ButtonText>
        </ButtonContainer>
        <ButtonContainer type="submit" onClick={onNextHandler}>
          <ButtonText to="/step-5">Next</ButtonText>
        </ButtonContainer>
      </ButtonsContainer>
    </>
  );
};

export default Range;
