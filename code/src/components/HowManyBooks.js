import React from 'react';
import { InputContainer, RadioWrapper, Label, RadioLabel, RadioInput } from './styled-components/FormElements'


const HowManyBooks = () => {
  return (
    <InputContainer>     
      <Label htmlFor="books">How many of Jane's novels have you read?</Label>
      <RadioWrapper>
        <RadioInput 
          type="radio" 
          name="radioQuestion" 
          id="none"
        />
        <RadioLabel htmlFor="none">None</RadioLabel>
      </RadioWrapper>
      <RadioWrapper>
        <RadioInput 
          type="radio" 
          name="radioQuestion"
          id="oneortwo"
        />
        <RadioLabel htmlFor="one">One or Two</RadioLabel>
      </RadioWrapper>
      <RadioWrapper>
        <RadioInput 
          type="radio" 
          name="radioQuestion"
          id="three"
        />
        <RadioLabel htmlFor="three">Three or more</RadioLabel>
      </RadioWrapper>
      <RadioWrapper>
        <RadioInput 
          type="radio" 
          name="radioQuestion"
          id="all"
        />
        <RadioLabel htmlFor="all">All of them, even the short stories!</RadioLabel>
      </RadioWrapper>
  </InputContainer>
  )
};

export default HowManyBooks;