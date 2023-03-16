import React, { useState } from 'react';
import styles from './QuestionThree.module.css';

const ratingText = [
  'Maybe someone else will like it 😅',
  'Eh 🙄',
  'It’s okay 🙂',
  'It’s good! 😊',
  'I love it! 😍'
];

const QuestionThree = () => {
  const [volume, getVolume] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.volumeSection}>
      <h2>Cool! And how much do you love this book?</h2>
      <form onSubmit={handleSubmit}>
        <label className={styles.likeVolume} htmlFor="vol">
          {' '}
        </label>
        <input
          type="range"
          min="0"
          max="4"
          value={volume}
          onChange={(event) => getVolume(event.target.value)} />
        <br />
        <output className="output" htmlFor="range">
          {ratingText[volume]}
        </output>
        <br />
        <button className="start-btn" type="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuestionThree;
