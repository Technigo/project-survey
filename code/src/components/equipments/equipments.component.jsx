import React from "react";

import {
  ButtonContainer,
  ButtonText,
  ButtonsContainer,
  Label
} from "../../assets/styles/shared";

import {
  CheckboxContainer,
  Row,
  Checkbox,
  CheckboxLabel,
  Input,
  Title
} from "./equipments.style";

const itemSelected = [];

const Equipments = () => {
  const onItemChange = (e) => {
    const { value } = e.target;

    if (itemSelected.includes(value)) {
      itemSelected.splice(itemSelected.indexOf(value), 1);
    } else {
      itemSelected.push(value);
    }
    console.log(itemSelected);
  };

  const onNextHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("equipments", itemSelected);
  };

  return (
    <CheckboxContainer onChange={onItemChange}>
      <Label>What equipment can you bring with you?</Label>
      <Row>
        <Checkbox>
          <Input type="checkbox" id="checkbox0" value="Harness" />
          <CheckboxLabel htmlFor="checkbox0" />
          <Title>Harness</Title>
        </Checkbox>
      </Row>
      <Row>
        <Checkbox>
          <Input type="checkbox" id="checkbox1" value="Climbing helmet" />
          <CheckboxLabel htmlFor="checkbox1" />
          <Title className="title">Climbing helmet</Title>
        </Checkbox>
      </Row>
      <Row>
        <Checkbox>
          <Input type="checkbox" id="checkbox4" value="Climbing shoes" />
          <CheckboxLabel htmlFor="checkbox4" />
          <Title className="title">Climbing shoes</Title>
        </Checkbox>
      </Row>
      <Row>
        <Checkbox>
          <Input type="checkbox" id="checkbox2" value="Carabiners" />
          <CheckboxLabel htmlFor="checkbox2" />
          <Title className="title">Carabiners</Title>
        </Checkbox>
      </Row>
      <Row>
        <Checkbox>
          <Input type="checkbox" id="checkbox3" value="Quickdraw" />
          <CheckboxLabel htmlFor="checkbox3" />
          <Title className="title">Quickdraw</Title>
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

export default Equipments;
