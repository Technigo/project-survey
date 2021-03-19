import React, { useState } from "react";

import { ButtonContainer, ButtonText, Label } from "../../assets/styles/shared";
import { NameInput } from "./name.style";

const Name = () => {
  const [name, setName] = useState(localStorage.getItem("Name") || "");

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onNextHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("Name", name);
  };

  return (
    <>
      <Label htmlFor="name">Name</Label>
      <NameInput id="name" type="text" value={name} onChange={onNameChange} />
      <ButtonContainer type="submit" onClick={onNextHandler}>
        <ButtonText to="/step-2">Next</ButtonText>
      </ButtonContainer>
    </>
  );
};

export default Name;
