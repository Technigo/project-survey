import React from 'react';

import { InputContainer, Label, TextField } from './styled-components/FormElements'

const QuestionName = () => {
  return (
    <InputContainer>
        <Label htmlFor="name">What is your name?</Label>
        <TextField 
        required
        id="name"
        type="text"
        placeholder="Type your name here..."
        />
      </InputContainer>
  )
};

export default QuestionName;

