import React, { useState } from "react";

import {
  ButtonContainer,
  ButtonText,
  ButtonsContainer,
  Label
} from "../../assets/styles/shared";

import { Input } from "./color.style";

const Color = () => {
  const [color, setColor] = useState(
    localStorage.getItem("Color") || ""
  );

  const onColorChange = (e) => {
    setColor(e.target.value);
  };

  const onResultHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("Color", color);
  };
  return (
    <>
      <Label htmlFor="favcolor">Select your favorite color:</Label>
      <Input
        type="color"
        id="favcolor"
        name="favcolor"
        value={color}
        onChange={onColorChange} />
      <ButtonsContainer>
        <ButtonContainer type="submit">
          <ButtonText to="/step-5">Previous</ButtonText>
        </ButtonContainer>
        <ButtonContainer type="submit" onClick={onResultHandler}>
          <ButtonText to="/result">Result</ButtonText>
        </ButtonContainer>
      </ButtonsContainer>
    </>
  );
};

export default Color;
