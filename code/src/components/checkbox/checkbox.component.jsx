import React from "react";

import {
  ButtonContainer,
  ButtonText,
  ButtonsContainer
} from "../../assets/styles/shared";

import {
  CheckboxContainer,
  Row,
  Checkbox,
  CheckboxLabel,
  Input,
  Title
} from "./checkbox.style";

const itemSelected = [];

const CheckBox = () => {
  const onItemChange = (e) => {
    itemSelected.push(e.target.value);
  };

  const onNextHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("Items", itemSelected);
  };

  return (
    <CheckboxContainer onChange={onItemChange}>
      <Row>
        <Checkbox>
          <Input type="checkbox" id="checkbox0" />
          <CheckboxLabel htmlFor="checkbox0" />
          <Title>Selectors</Title>
        </Checkbox>
      </Row>
      <Row>
        <Checkbox>
          <Input type="checkbox" id="checkbox1" value="Specificity" />
          <CheckboxLabel htmlFor="checkbox1" />
          <Title className="title">Specificity</Title>
        </Checkbox>
      </Row>
      <Row>
        <Checkbox>
          <Input type="checkbox" id="checkbox4" value="Cascade" />
          <CheckboxLabel htmlFor="checkbox4" />
          <Title className="title">Cascade</Title>
        </Checkbox>
      </Row>
      <Row>
        <Checkbox>
          <Input type="checkbox" id="checkbox2" value="Inheritance" />
          <CheckboxLabel htmlFor="checkbox2" />
          <Title className="title">Inheritance</Title>
        </Checkbox>
      </Row>
      <Row>
        <Checkbox>
          <Input type="checkbox" id="checkbox3" value="Transition" />
          <CheckboxLabel htmlFor="checkbox3" />
          <Title className="title">Transition</Title>
        </Checkbox>
      </Row>
      <ButtonsContainer>
        <ButtonContainer type="submit">
          <ButtonText to="/step-2">Previous</ButtonText>
        </ButtonContainer>
        <ButtonContainer type="submit" onClick={onNextHandler}>
          <ButtonText to="/step-4">Next</ButtonText>
        </ButtonContainer>
      </ButtonsContainer>
    </CheckboxContainer>
  );
};

export default CheckBox;
