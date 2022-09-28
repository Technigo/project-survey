import React from 'react';
import styles from './End.module.css';

const End = (props) => {
  return (
    <div className="main-container">
      <div className={styles.End}>
        <h1>
          You are {props.name} first question: {props.question1} and second q:{' '}
          {props.question2}
          q3: {props.question3}
        </h1>
      </div>
    </div>
  );
};

export default End;
