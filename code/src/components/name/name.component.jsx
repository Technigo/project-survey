import React, { useState } from "react";

import { ButtonContainer, ButtonText, Label } from "../../assets/styles/shared";
import { NameInput } from "./name.style";

const Name = () => {
  const [name, setName] = useState(localStorage.getItem("name") || "");

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onNextHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
  };

  return (
    <>
      <Label htmlFor="name">Please tell us your name:</Label>
      <NameInput id="name" type="text" value={name} onChange={onNameChange} />
      <ButtonContainer type="submit" onClick={onNextHandler}>
        <ButtonText to="/step-2">Next</ButtonText>
      </ButtonContainer>
    </>
  );
};

export default Name;
