import { optionsQ1 } from 'lib/questions';
import React from 'react';
import styles from './End.module.css';

const End = (props) => {
  let yourCharacter;
  if (props.question1 === optionsQ1[0]) {
    yourCharacter = 'Legolas!';
  } else if (props.question1 === optionsQ1[1]) {
    yourCharacter = 'Gimli!';
  } else if (props.question1 === optionsQ1[2]) {
    yourCharacter = 'Saruman';
  } else if (props.question1 === optionsQ1[3]) {
    yourCharacter = 'Gandalf!';
  }

  return (
    <div className="main-container">
      <div className={styles.end}>
        <p>Which weapon do you choose in a fight: </p>
        <span className={styles.answer}>{props.question1}</span>
        <p>Which type of schoolkid were you: </p>
        <span className={styles.answer}>{props.question2}</span>
        <p>When playing boardgames, are you the one that: </p>
        <span className={styles.answer}>{props.question3}</span>
        <p className={styles.yourCharacter}> {props.name}, You became:</p>
        <span className={styles.finalCharacter}>{yourCharacter}</span>
      </div>
    </div>
  );
};

export default End;
