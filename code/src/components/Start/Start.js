import React from 'react';
import styles from './Start.module.css';

const Start = (props) => {
  return (
    <div className="main-container">
      <div className={styles.Start}>
        <h1> Which character from Disney are you?</h1>
        <p>Find out in this survey!</p>
        <button type="button" onClick={props.nextPage}>
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Start;
