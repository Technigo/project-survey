import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

import {
  InputContainer,
  Label,
  Select,
  Option,
  ButtonContainer,
  Button,
  Form
} from "./styled-components/FormElements";

const FavoriteFilm = ({ favoriteFilm, setFavoriteFilm, handleSubmit }) => {
  const onFavoriteFilm = (e) => {
    setFavoriteFilm(e.target.value);
  };
  return (
    <Form>
      <InputContainer>
        <Label 
          tabIndex="0"
          htmlFor="film"
          aria-label="What was your favorite film or adaption of Pride and Prejudice?"
        >
          What was your favorite film or adaptation of Pride and Prejudice?
        </Label>
        <Select
          id="favoritefilm"
          value={favoriteFilm}
          onChange={onFavoriteFilm}
          required
        >
          <Option value="" disabled selected>
            Select your favorite
          </Option>
          <Option>BBC Tv mini series 1995 with Colin Firth</Option>
          <Option>Film 2005 with Keira Knightly</Option>
          <Option>Tv mini series 1967 with Celia Bannerman</Option>
          <Option>Bridget Jones Diary (2001)</Option>
          <Option>Pride Prejudice and Zombies (2016)</Option>
          <Option>The Lizzie Bennet Diaries - web series (2012-2013)</Option>
          <Option>None of the above</Option>
          <Option>
            None of the above, Pride and Predjudice isn't my favorite.
          </Option>
        </Select>
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
          Let's Summarize! <FaLongArrowAltRight />
        </Button>
      </ButtonContainer>
    </Form>
  )
};

export default FavoriteFilm;
