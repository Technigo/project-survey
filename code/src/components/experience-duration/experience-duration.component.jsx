import React, { useState } from "react";

import {
  ButtonContainer,
  ButtonText,
  ButtonsContainer,
  Label
} from "../../assets/styles/shared";

import { Progress, RangeInput } from "./experience-duration.style"

const ExperienceDuration = () => {
  const [range, setRange] = useState(
    localStorage.getItem("experience") || "50"
  );

  const onRangeChange = (e) => {
    setRange(e.target.value);
  };

  const onNextHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("experience", range);
  };

  return (
    <>
      <Label>how much experience of climbing do you have?</Label>
      <Progress value={range} max="100" id="progress" />
      <RangeInput type="range" min="0" max="100" onChange={onRangeChange} />
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

export default ExperienceDuration;
