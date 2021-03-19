import React, { useState } from "react";

import {
  ButtonContainer,
  ButtonText,
  ButtonsContainer,
  Label
} from "../../assets/styles/shared";

import { Input } from "./color.style";

const Color = () => {
  const [backgroundColor, setBackgroundColor] = useState(
    localStorage.getItem("backgroundColor") || "#93d2e2"
  );
  const [textColor, setTextColor] = useState(
    localStorage.getItem("textColor") || "#ffffff"
  );

  const onBackgroundColorChange = (e) => {
    setBackgroundColor(e.target.value);
  };
  const onTextColorChange = (e) => {
    setTextColor(e.target.value);
  };

  const onResultHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("backgroundColor", backgroundColor);
    localStorage.setItem("textColor", textColor);
  };
  return (
    <>
      <Label htmlFor="favcolor">Please select your summary background color:</Label>
      <Input
        type="color"
        id="favcolor"
        name="favcolor"
        value={backgroundColor}
        onChange={onBackgroundColorChange} />
      <Label htmlFor="favcolor1">Please select your summary text color:</Label>
      <Input
        type="color"
        id="favcolor1"
        name="favcolor1"
        value={textColor}
        onChange={onTextColorChange} />
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
