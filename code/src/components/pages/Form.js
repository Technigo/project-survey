import React from 'react';

import QuestionName from 'components/QuestionName';
import QuestionBooks from 'components/QuestionBooks';
import QuestionFavorite from 'components/QuestionFavorite';
import QuestionFilms from 'components/QuestionFilms';

const Form = () => {
  return (
    <form>
      <QuestionName />
      <QuestionBooks />
      <QuestionFavorite />
      <QuestionFilms />       
    </form>
  )
};

export default Form;