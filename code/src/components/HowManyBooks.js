import React from "react";
import { FaLongArrowAltRight } from 'react-icons/fa'
import {
  InputContainer,
  RadioWrapper,
  Label,
  RadioLabel,
  RadioInput,
  ButtonContainer,
  Button,
  Form
} from "./styled-components/FormElements";

const HowManyBooks = ({ howManyBooks, setHowManyBooks, handleSubmit }) => {
  const onhowManyBooks = (e) => {
    setHowManyBooks(e.target.value);
  };
  return (
    <Form>
      <InputContainer>
        <Label
          tabIndex="0"
          htmlFor="books"
          aria-label="how many of Jane's novels have you read?"
        >
          How many of Jane's novels have you read?
        </Label>
        <RadioWrapper>
          <RadioInput
            type="radio"
            name="radioQuestion"
            id="none"
            value="None"
            onChange={onhowManyBooks}
            checked={howManyBooks === "None"}
          />
          <RadioLabel htmlFor="none">None</RadioLabel>
        </RadioWrapper>
        <RadioWrapper>
          <RadioInput
            type="radio"
            name="radioQuestion"
            id="oneortwo"
            value="One or two"
            onChange={onhowManyBooks}
            checked={howManyBooks === "One or two"}
          />
          <RadioLabel htmlFor="one">One or Two</RadioLabel>
        </RadioWrapper>
        <RadioWrapper>
          <RadioInput
            type="radio"
            name="radioQuestion"
            id="three"
            value="Three or more"
            onChange={onhowManyBooks}
            checked={howManyBooks === "Three or more"}
          />
          <RadioLabel htmlFor="three">Three or more</RadioLabel>
        </RadioWrapper>
        <RadioWrapper>
          <RadioInput
            type="radio"
            name="radioQuestion"
            id="all"
            value="All of them even the short stories!"
            onChange={onhowManyBooks}
            checked={howManyBooks === "All of them even the short stories!"}
          />
          <RadioLabel htmlFor="all">
            All of them, even the short stories!
          </RadioLabel>
        </RadioWrapper>
      </InputContainer>
      <ButtonContainer>
        <Button
          onSubmit={handleSubmit}
          className="button"
          tabIndex="0"
          aria-pressed="false"
          aria-label="Next question"
          type="submit"
        >
          Second Question <FaLongArrowAltRight />
        </Button>
      </ButtonContainer>
    </Form>
  )
};

export default HowManyBooks;
