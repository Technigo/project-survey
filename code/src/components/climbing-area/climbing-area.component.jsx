import React, { useState } from "react";

import AreaOption from "../area-option/area-option.component";
import {
  ButtonContainer,
  ButtonText,
  ButtonsContainer,
  Label
} from "../../assets/styles/shared";

const areas = ["Indoor", "Outdoor"];

const ClimbingArea = () => {
  const [area, setArea] = useState(localStorage.getItem("area") || "");
  const onNextHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("area", area);
  };

  return (
    <>
      <Label>What type of area for climbing do you prefer?</Label>
      {areas.map((climbingArea) => {
        return (
          <AreaOption
            area={climbingArea}
            setArea={setArea}
            key={climbingArea} />
        );
      })}
      <ButtonsContainer>
        <ButtonContainer type="submit">
          <ButtonText to="/step-4">Previous</ButtonText>
        </ButtonContainer>
        <ButtonContainer type="submit" onClick={onNextHandler}>
          <ButtonText to="/step-6">Next</ButtonText>
        </ButtonContainer>
      </ButtonsContainer>
    </>
  );
};

export default ClimbingArea;
