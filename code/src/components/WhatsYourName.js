import React from 'react';

import { InputContainer, Label, TextField } from './styled-components/FormElements'

const WhatsYourName = () => {
  return (
    <InputContainer>
        <Label htmlFor="name">What is your name?</Label>
        <TextField 
        required
        id="name"
        type="text"
        value={name}
        placeholder="Type your name here..."
        />
      </InputContainer>
  )
};

export default WhatsYourName;

