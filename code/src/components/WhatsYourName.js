import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

import {
  InputContainer,
  Form,
  Label,
  TextField,
  Title,
  ButtonContainer,
  Button,
} from "./styled-components/FormElements";

const WhatsYourName = ({ name, setName, handleSubmit }) => {
  const onNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Form>
      <InputContainer>
        <Title tabIndex="0" aria-label="Welcome to our Survey!">
          Welcome to our Survey!
        </Title>
        <Label tabIndex="0" htmlFor="name" aria-label="What is your name?">
          What is your name?
        </Label>
        <TextField
          required
          id="name"
          type="text"
          value={name}
          placeholder="Type your name here..."
          onChange={onNameChange}
        />
      </InputContainer>
      <ButtonContainer>
        <Button
          onSubmit={handleSubmit}
          className="button"
          tabIndex="0"
          aria-pressed="false"
          aria-label="Start survey"
          type="submit"
        >
          Let's Begin!
          <FaLongArrowAltRight />
        </Button>
      </ButtonContainer>
    </Form>
  );
};

export default WhatsYourName;
