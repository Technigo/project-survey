import React, { useState } from 'react';
import styles from './QuestionTwo.module.css';

const genres = [
  'Fantasy',
  'Adventure',
  'Romance',
  'Historical Fiction',
  'Biography',
  'Cooking',
  'Other'
];

const QuestionTwo = () => {
  const [selectedGenre, getSelectedGenre] = useState('Select a genre');

  const handleGenreChange = (event) => {
    getSelectedGenre(event.target.value);
  };

  return (
    <section className={styles.genreSection}>
      <div>
        <h2>Awesome! Thanks for the suggestion!</h2>
        <p>What genre would you say this book is?</p>
      </div>
      <div className={styles.dropDownMenu}>
        <select id="genre-select" value={selectedGenre} onChange={handleGenreChange}>
          <option value="">Select a genre</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <button className="start-btn" type="button">
        Submit
      </button>
    </section>
  );
};

export default QuestionTwo;
