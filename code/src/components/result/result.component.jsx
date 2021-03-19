import React from "react";

import { ButtonContainer, ButtonText } from "../../assets/styles/shared";

const Result = () => {
  const userName = localStorage.getItem("Name");
  const userAge = localStorage.getItem("Age");
  const userTech = localStorage.getItem("Tech");
  const userItems = localStorage.getItem("Items");
  const userRange = localStorage.getItem("Range");
  const userColor = localStorage.getItem("Color");

  const onResetForm = () => {
    localStorage.removeItem("Name");
    localStorage.removeItem("Age");
    localStorage.removeItem("Tech");
    localStorage.removeItem("Items");
    localStorage.removeItem("Range");
    localStorage.removeItem("Color");
  };
  return (
    <>
      <div>{userName}</div>
      <div>{userAge}</div>
      <div>{userItems}</div>
      <div>{userRange}</div>
      <div>{userTech}</div>
      <div>{userColor}</div>
      <div style={{ color: `${userColor}` }}>dgd</div>
      <ButtonContainer onClick={onResetForm}>
        <ButtonText to="/step-1">Start</ButtonText>
      </ButtonContainer>
    </>
  );
};

export default Result;
