import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

import {
  InputContainer,
  Label,
  Option,
  Select,
} from "./styled-components/FormElements";

const FavoriteBook = ({ favoriteBook, setFavoriteBook, handleSubmit }) => {
  const onFavoriteBook = (e) => {
    setFavoriteBook(e.target.value);
  };
  return (
    <form>
      <InputContainer>
        <Label
          tabIndex="0"
          htmlFor="favoriteBook"
          aria-label="What is your favorite Jane Austen novel?"
        >
          What is your favorite Jane Austen novel?
        </Label>
        <Select
          id="favoriteBook"
          value={favoriteBook}
          onChange={onFavoriteBook}
          required
        >
          <Option value="" disabled selected>
            Select your favorite
          </Option>
          <Option>Pride and Prejudice</Option>
          <Option>Sense and Sensibility</Option>
          <Option>Mansfield Park</Option>
          <Option>Emma</Option>
          <Option>Persuasion</Option>
          <Option>Northanger Abbey</Option>
          <Option>Lady Susan</Option>
        </Select>
      </InputContainer>
      <div>
        <button
          onSubmit={handleSubmit}
          className="button"
          tabIndex="0"
          aria-pressed="false"
          aria-label="Next question"
          type="submit"
        >
          Third Question <FaLongArrowAltRight />
        </button>
      </div>
    </form>
  )
};

export default FavoriteBook;
