import React from 'react';
import styles from './Questions.module.css';

const Questions = (props) => {
  return (
    <div className="main-container">
      <div className={styles.Questions}>
        <h1> Question 1</h1>
        <p>Lalalalalla</p>
        <button type="button" onClick={props.nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Questions;
