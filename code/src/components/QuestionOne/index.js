import React, { useState } from 'react';
import name from '../Start';
import styles from './QuestionOne.module.css';

const QuestionOne = () => {
  const [bookRec, getBookRec] = useState('');

  return (
    <section>
      <div className="top-text">
        <h2>
          Welcome {name}!
          <br />
          We’re so happy to have you visiting The Book Club!
        </h2>
        <p>So! What book would you like to recommend today?</p>
      </div>
      <div className="book-rec">
        <form>
          <label className="book-textarea" htmlFor="rec-input">
            {' '}
          </label>
          <textarea
            className={styles.textarea}
            type="text"
            value={bookRec}
            rows="3"
            cols="50"
            placeholder="Write your suggestion..."
            onChange={(event) => getBookRec(event.target.value)} />
        </form>
      </div>
      <button className="start-btn" type="button">
        Submit
      </button>
    </section>
  );
};

export default QuestionOne;
