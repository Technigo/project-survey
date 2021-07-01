import React from 'react';
import Select from '@material-ui/core/Select';

const QuestionFavorite = () => {
  return (
    <div>
    <label htmlFor="favoriteBook">What is your favorite Jane Austen novel?</label>
    <Select id="favoriteBook">
      <option value="" disabled selected>Select your favorite</option>
      <option>Pride and Prejudice</option>
      <option>Sense and Sensibility</option>
      <option>Mansfield Park</option>
      <option>Emma</option>
      <option>Persuasion</option>
      <option>Northanger Abbey</option>
      <option>Lady Susan</option>
    </Select>
  </div>
  )
};

export default QuestionFavorite;