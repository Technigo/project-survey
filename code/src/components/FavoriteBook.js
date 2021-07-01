import React from 'react';

import { InputContainer, Label, Option, Select } from './styled-components/FormElements'


const FavoriteBook = () => {
  
  return (
    <InputContainer>
    <Label htmlFor="favoriteBook">What is your favorite Jane Austen novel?</Label>
    <Select id="favoriteBook">
      <Option value="" disabled selected>Select your favorite</Option>
      <Option>Pride and Prejudice</Option>
      <Option>Sense and Sensibility</Option>
      <Option>Mansfield Park</Option>
      <Option>Emma</Option>
      <Option>Persuasion</Option>
      <Option>Northanger Abbey</Option>
      <Option>Lady Susan</Option>
    </Select>
  </InputContainer>
  )
};

export default FavoriteBook;