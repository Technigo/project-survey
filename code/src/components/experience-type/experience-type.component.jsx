import React, { useState } from "react";

import {
  ButtonContainer,
  ButtonText,
  ButtonsContainer,
  Label
} from "../../assets/styles/shared";

import { ClimbingTypeSelect } from "./experience-type.style";

const ExperienceType = () => {
  const [type, setType] = useState(
    localStorage.getItem("climbingType") || ""
  );

  const onClimbingTypeChange = (e) => {
    setType(e.target.value);
  };

  const onNextHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("climbingType", type);
  };

  return (
    <>
      <Label htmlFor="climbingType ">What type of climbing experience do you want?</Label>
      <ClimbingTypeSelect
        id="climbingType"
        onChange={onClimbingTypeChange}
        value={type}
        className="select">
        <option disabled>choose</option>
        <option>Free Soloing</option>
        <option>Free Climbing</option>
        <option>Aid Climbing</option>
        <option>Bouldering</option>
        <option>Deep Water Soloing</option>
      </ClimbingTypeSelect>
      <ButtonsContainer>
        <ButtonContainer type="submit">
          <ButtonText to="/step-1">Previous</ButtonText>
        </ButtonContainer>
        <ButtonContainer type="submit" onClick={onNextHandler}>
          <ButtonText to="/step-3">Next</ButtonText>
        </ButtonContainer>
      </ButtonsContainer>
    </>
  );
};

export default ExperienceType;
