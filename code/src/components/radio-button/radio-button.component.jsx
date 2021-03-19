import React, { useState } from "react";

import TechnologyRadioOption from "../option/option";
import {
  ButtonContainer,
  ButtonText,
  ButtonsContainer
} from "../../assets/styles/shared";

const technologies = ["html", "css", "java", "ruby", "python", "js"];

const Tech = () => {
  const [tech, setTech] = useState(localStorage.getItem("Tech") || "");
  const onNextHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("Tech", tech);
  };

  return (
    <>
      {technologies.map((technology) => {
        return (
          <TechnologyRadioOption
            technologyName={technology}
            setTech={setTech}
            key={technology} />
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

export default Tech;
