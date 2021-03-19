import React from "react";

import { ButtonContainer, ButtonText } from "../../assets/styles/shared";

const Result = () => {
  const userName = localStorage.getItem("name");
  const climbingType = localStorage.getItem("climbingType");
  const equipments = localStorage.getItem("equipments");
  const experience = localStorage.getItem("experience");
  const area = localStorage.getItem("area");
  const backgroundColor = localStorage.getItem("backgroundColor");
  const textColor = localStorage.getItem("textColor");

  const onResetForm = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("climbingType");
    localStorage.removeItem("Tech");
    localStorage.removeItem("equipments");
    localStorage.removeItem("experience");
    localStorage.removeItem("area");
    localStorage.removeItem("backgroundColor");
    localStorage.removeItem("textColor");
  };

  const experienceText = () => {
    if (experience === 0) {
      return "don't have any previous experience of climbing"
    }
    if (experience > 0 && experience < 25) {
      return "have a little experience of climbing"
    }
    if (experience > 26 && experience < 50) {
      return "have some experience of climbing"
    }
    if (experience > 51 && experience < 75) {
      return "have a lot of experience of climbing"
    }
    if (experience > 76 && experience === 100) {
      return "are a professional climber!"
    }
  }

  return (
    <>
      <div style={{ backgroundColor: `${backgroundColor}`, padding: "16px", display: "grid", gap: "16px", marginBottom: "32px" }}>
        <p style={{ color: `${textColor}` }}>{userName}, you chose {climbingType}. Luckily you have {equipments}. Also you {experienceText()} You prefer {area} climbing.</p>
      </div>
      <ButtonContainer onClick={onResetForm}>
        <ButtonText to="/step-1">Start</ButtonText>
      </ButtonContainer>
    </>
  );
};

export default Result;
