import React from 'react';

import { InputContainer, Label, Select, Option } from './styled-components/FormElements'

const FavoriteFilm = () => {
  return (
    <InputContainer>
        <Label htmlFor="film">What was your favorite film or adaptation of Pride and Prejudice?</Label>        
          <Select id="film" >
            <Option value="" disabled selected>Select your favorite</Option>
            <Option>BBC Tv mini series 1995 with Colin Firth</Option>
            <Option>Film 2005 with Keira Knightly</Option>
            <Option>Tv mini series 1967 with Celia Bannerman</Option>
            <Option>Bridget Jones Diary (2001)</Option>
            <Option>Pride Prejudice and Zombies (2016)</Option>
            <Option>The Lizzie Bennet Diaries - web series (2012-2013)</Option>
            <Option>None of the above</Option>
            <Option>None of the above, Pride and Predjudice isn't my favorite.</Option>
          </Select>
      </InputContainer>
  )
};

export default FavoriteFilm;